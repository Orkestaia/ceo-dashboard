// Exact structure from Google Sheets - NO transformations

export interface AcquisitionChannel {
    "Primer origen de usuario principal de usuario predeterminado de la sesión": string;
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
    "Sender": string;
    "Date": string;
    "Lead in list": string;
    "Sent": string;
    "Completed": string;
    "Open": string;
    "Reply": string;
    "Increase delay": string;
    "Clic in link": string;
    "Bounced": string;
}

export interface EmailMarketingRow {
    "Envío Date": string;
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
    "Amount spent (USD)": string;
    "Impressions": string;
    "CPM (cost per 1,000 impressions)": string;
    "Link clicks": string;
    "CTR (all)": string;
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
