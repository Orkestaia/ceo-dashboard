/* eslint-disable @typescript-eslint/no-explicit-any */
import Papa from "papaparse";
import { DashboardData } from "@/types/n8n";
import { SHEET_CONFIG } from "./config";
import { mockDashboardData } from "./mock-data";

// Helper to fetch CSV
async function fetchSheetCSV(sheetId: string, gid: string) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch sheet");
        const csvText = await response.text();

        return new Promise<any[]>((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results: any) => resolve(results.data),
                error: (err: any) => reject(err)
            });
        });
    } catch (error) {
        console.error(`Error fetching GID ${gid}:`, error);
        return [];
    }
}

export async function fetchLiveDashboardData(): Promise<DashboardData> {
    try {
        // Fetch all sheets
        const [metaData, coldData, emailData, analyticsChannels, analyticsPages] = await Promise.all([
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.META_ADS),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.COLD_EMAIL),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.EMAIL_MKT),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.ANALYTICS),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.ANALYTICS_PAGES)
        ]);

        console.log("Raw Meta Data:", metaData); // Debug log

        // If fetch returns empty arrays (likely due to auth/publish issues), fallback needed or handle gracefully
        if (!metaData.length && !coldData.length) {
            console.warn("No data fetched. Sheet might not be published.");
            return mockDashboardData;
        }

        const metaTotals = calculateMetaTotals(metaData);
        const coldTotals = calculateColdTotals(coldData);
        const emailTotals = calculateEmailTotals(emailData);
        const analyticsTotals = calculateAnalyticsTotals(analyticsChannels);

        return {
            lastUpdated: new Date().toISOString(),
            metaAds: { campaigns: metaData, totals: metaTotals },
            coldEmail: { campaigns: coldData, totals: coldTotals },
            emailMarketing: { campaigns: emailData, totals: emailTotals },
            analytics: {
                channels: analyticsChannels,
                topPages: analyticsPages,
                totals: analyticsTotals
            }
        };

    } catch (e) {
        console.error("Fetch failed, using mock", e);
        return mockDashboardData;
    }
}

// --- Calculation Helpers ---
function calculateMetaTotals(data: any[]) {
    const t = { totalSpend: 0, totalImpressions: 0, totalClicks: 0, totalResults: 0, avgCPC: "0", avgCTR: "0" };
    data.forEach(d => {
        t.totalSpend += parseFloat(d["Amount spent (USD)"] || "0");
        t.totalImpressions += parseInt(d["Impressions"] || "0");
        t.totalClicks += parseInt(d["Link clicks"] || "0");
        t.totalResults += parseInt(d["Results"] || "0");
    });
    t.avgCPC = t.totalClicks ? (t.totalSpend / t.totalClicks).toFixed(2) : "0";
    t.avgCTR = t.totalImpressions ? ((t.totalClicks / t.totalImpressions) * 100).toFixed(2) : "0";
    return t;
}

function calculateColdTotals(data: any[]) {
    const t = { totalLeads: 0, totalSent: 0, totalOpens: 0, totalReplies: 0, totalPositiveReplies: 0, totalClicks: 0, openRate: "0", replyRate: "0" };
    data.forEach(d => {
        t.totalLeads += parseInt(d["Lead in list"] || "0");
        t.totalSent += parseInt(d["Sent"] || "0");
        t.totalOpens += parseInt(d["Open"] || "0");
        t.totalReplies += parseInt(d["Reply"] || "0");
        t.totalPositiveReplies += parseInt(d["Positive Reply"] || "0");
        t.totalClicks += parseInt(d["Clic in link"] || "0");
    });
    t.openRate = t.totalSent ? ((t.totalOpens / t.totalSent) * 100).toFixed(1) : "0";
    t.replyRate = t.totalSent ? ((t.totalReplies / t.totalSent) * 100).toFixed(1) : "0";
    return t;
}

function calculateEmailTotals(data: any[]) {
    const t = { totalSent: 0, totalDelivered: 0, totalOpens: 0, totalClicks: 0, totalUnsubscribes: 0, totalRevenue: 0, avgOpenRate: "0", avgClickRate: "0" };
    data.forEach(d => {
        t.totalSent += parseInt(d["Sent"] || "0");
        t.totalDelivered += parseInt(d["Delivered"] || "0");
        t.totalOpens += parseInt(d["Opens"] || "0");
        t.totalClicks += parseInt(d["Clicks"] || "0");
        t.totalUnsubscribes += parseInt(d["Unsubscribes"] || "0");
        const rev = (d["Revenue"] || "0").replace(/[$,]/g, "");
        t.totalRevenue += parseFloat(rev);
    });
    t.avgOpenRate = t.totalDelivered ? ((t.totalOpens / t.totalDelivered) * 100).toFixed(1) : "0";
    t.avgClickRate = t.totalOpens ? ((t.totalClicks / t.totalOpens) * 100).toFixed(1) : "0";
    return t;
}

function calculateAnalyticsTotals(data: any[]) {
    const t = { totalUsers: 0, totalNewUsers: 0, totalReturningUsers: 0, totalKeyEvents: 0 };
    data.forEach(d => {
        const users = parseInt(d["Total de usuarios"] || d["Total Users"] || "0");
        t.totalUsers += users;
        t.totalNewUsers += parseInt(d["Usuarios nuevos"] || d["New Users"] || "0");
        t.totalReturningUsers += parseInt(d["Usuarios recurrentes"] || d["Returning Users"] || "0");
        t.totalKeyEvents += parseInt(d["Eventos clave"] || d["Key Events"] || "0");
    });
    return t;
}
