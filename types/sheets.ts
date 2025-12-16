// Exact structure from Google Sheets - matching REAL CSV data

export interface AcquisitionChannel {
    "Primer grupo de canales principal del usuario (Grupo de canales predeterminado)": string;
    "Total de usuarios": string;
    "Usuarios nuevos": string;
    "Usuarios recurrentes": string;
    "Eventos clave": string;
}

export interface TopPage {
    "Pages": string;
    "Visits": string;
    "Active User": string;
}

export interface ColdEmailRow {
    "Sector": string;
    "State": string;
    "Lead in list": string;
    "Sent": string;
    "Completed": string;
    "Open": string;
    "Reply": string;
    "%": string;
    "Positive Reply": string;
    "Clic in link": string;
    "Bounced": string;
}

export interface EmailMarketingRow {
    "Send Date": string;
    "Sent": string;
    "Delivered": string;
    "Open Rate": string;
    "Opens": string;
    "Click Rate": string;
    "Clicks": string;
    "Unsubscribes": string;
    "Bounced": string;
    "Revenue": string;
}

export interface MetaAdsRow {
    "Campaign name": string;
    "status": string;
    "Amount spent (USD)": string;
    "Impressions": string;
    "CPM (cost per 1,000 impressions)": string;
    "CTR (all)": string;
    "Link clicks": string;
    "CPC (all)": string;
    "Result type": string;
    "Results": string;
    "Cost per result": string;
}

export interface SheetData {
    acquisitionChannels: AcquisitionChannel[];
    topPages: TopPage[];
    coldEmail: ColdEmailRow[];
    emailMarketing: EmailMarketingRow[];
    metaAds: MetaAdsRow[];
    lastUpdated: string;
}
