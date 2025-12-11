export const SHEET_CONFIG = {
    // Main Spreadsheet ID from the URL provided
    SPREADSHEET_ID: "1xkpYfxjHa1V0Z-yZsozFnN2cbfShAzI5KmbgNQN76s4",

    // GIDs (Sheet IDs) - We'll assume typical defaults or need user to confirm
    // Since user provided a multi-sheet doc, we need the specific gid= for each view.
    // For now, these are likely needing update by the user or inspection of the URL.
    SHEETS: {
        OVERVIEW: "0",      // "Hoja 1" or first sheet usually
        META_ADS: "0",      // Placeholder - User needs to provide specific GIDs if different sheets
        COLD_EMAIL: "0",
        EMAIL_MKT: "0",
        ANALYTICS: "0"
    }
};
