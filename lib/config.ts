export const SHEET_CONFIG = {
  // Published spreadsheet base URL
  PUBLISHED_BASE_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTgTGlbOr5W5e3tRe_YNXB0UUtgk0gce8IfAg1bkMyzvBftt_rjI94F7fMbbIszQbBhj3NgBNhBTyGW/pub",

  // Original spreadsheet ID (for export URLs)
  SPREADSHEET_ID: "1xkpYfxjHa1V0Z-yZsozFnN2cbfShAzI5KmbgNQN76s4",

  // CORRECTED GIDs - verified by actual CSV content
  SHEETS: {
    ANALYTICS: "1361877226",        // ✅ Acquisition Channels
    ANALYTICS_PAGES: "896433562",   // ✅ Top Pages
    COLD_EMAIL: "1803005666",       // ✅ FIXED: Was META_ADS
    EMAIL_MKT: "1841138132",        // ✅ FIXED: Was COLD_EMAIL  
    META_ADS: "1834854673"          // ✅ FIXED: Was EMAIL_MKT
  }
};
