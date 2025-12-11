/* eslint-disable @typescript-eslint/no-explicit-any */
import Papa from "papaparse";
import { SheetData } from "@/types/sheets";
import { SHEET_CONFIG } from "./config";

async function fetchSheetCSV(gid: string): Promise<any[]> {
    // Use published URL with gid parameter
    const url = `${SHEET_CONFIG.PUBLISHED_BASE_URL}?gid=${gid}&single=true&output=csv`;

    console.log(`Fetching: ${url}`);

    try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
            console.error(`Failed to fetch GID ${gid}: ${response.status}`);
            return [];
        }
        const csvText = await response.text();

        console.log(`CSV for GID ${gid}:`, csvText.substring(0, 200));

        return new Promise<any[]>((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results: any) => {
                    console.log(`Parsed ${results.data.length} rows for GID ${gid}`);
                    resolve(results.data);
                },
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
        console.log("Starting to fetch all sheets...");

        const [acquisitionChannels, topPages, coldEmail, emailMarketing, metaAds] = await Promise.all([
            fetchSheetCSV(SHEET_CONFIG.SHEETS.ANALYTICS),
            fetchSheetCSV(SHEET_CONFIG.SHEETS.ANALYTICS_PAGES),
            fetchSheetCSV(SHEET_CONFIG.SHEETS.COLD_EMAIL),
            fetchSheetCSV(SHEET_CONFIG.SHEETS.EMAIL_MKT),
            fetchSheetCSV(SHEET_CONFIG.SHEETS.META_ADS)
        ]);

        console.log("Fetch complete:", {
            acquisitionChannels: acquisitionChannels.length,
            topPages: topPages.length,
            coldEmail: coldEmail.length,
            emailMarketing: emailMarketing.length,
            metaAds: metaAds.length
        });

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
