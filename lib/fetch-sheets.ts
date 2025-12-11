/* eslint-disable @typescript-eslint/no-explicit-any */
import Papa from "papaparse";
import { SheetData } from "@/types/sheets";
import { SHEET_CONFIG } from "./config";

async function fetchSheetCSV(sheetId: string, gid: string): Promise<any[]> {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

    try {
        const response = await fetch(url, { cache: 'no-store' });
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

export async function fetchSheetData(): Promise<SheetData> {
    try {
        const [acquisitionChannels, topPages, coldEmail, emailMarketing, metaAds] = await Promise.all([
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.ANALYTICS),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.ANALYTICS_PAGES),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.COLD_EMAIL),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.EMAIL_MKT),
            fetchSheetCSV(SHEET_CONFIG.SPREADSHEET_ID, SHEET_CONFIG.SHEETS.META_ADS)
        ]);

        console.log("Fetched data:", { acquisitionChannels, topPages, coldEmail, emailMarketing, metaAds });

        return {
            acquisitionChannels,
            topPages,
            coldEmail,
            emailMarketing,
            metaAds,
            lastUpdated: new Date().toISOString()
        };
    } catch (error) {
        console.error("Failed to fetch sheet data:", error);
        // Return empty arrays if fetch fails
        return {
            acquisitionChannels: [],
            topPages: [],
            coldEmail: [],
            emailMarketing: [],
            metaAds: [],
            lastUpdated: new Date().toISOString()
        };
    }
}
