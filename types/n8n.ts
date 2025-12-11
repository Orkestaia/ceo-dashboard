export interface DashboardData {
    lastUpdated: string;
    metaAds: {
        campaigns: MetaAdsCampaign[];
        totals: MetaAdsTotals;
    };
    coldEmail: {
        campaigns: ColdEmailCampaign[];
        totals: ColdEmailTotals;
    };
    emailMarketing: {
        campaigns: EmailMarketingCampaign[];
        totals: EmailMarketingTotals;
    };
    analytics: {
        channels: AnalyticsChannel[];
        topPages: AnalyticsPage[];
        totals: AnalyticsTotals;
    };
}

// --- Meta Ads ---
export interface MetaAdsCampaign {
    "Campaign name": string;
    "Amount spent (USD)": string;
    "Impressions": string;
    "Link clicks": string;
    "Results": string;
    [key: string]: string; // Allow flexible fields from Sheets
}

export interface MetaAdsTotals {
    totalSpend: number;
    totalImpressions: number;
    totalClicks: number;
    totalResults: number;
    avgCPC: string;
    avgCTR: string;
}

// --- Cold Email ---
export interface ColdEmailCampaign {
    "Campaign Name": string;
    "Lead in list": string;
    "Sent": string;
    "Open": string;
    "Reply": string;
    "Positive Reply": string;
    "Clic in link": string;
}

export interface ColdEmailTotals {
    totalLeads: number;
    totalSent: number;
    totalOpens: number;
    totalReplies: number;
    totalPositiveReplies: number;
    totalClicks: number;
    openRate: string;
    replyRate: string;
}

// --- Email Marketing ---
export interface EmailMarketingCampaign {
    "Campaign Name": string;
    "Sent": string;
    "Delivered": string;
    "Opens": string;
    "Clicks": string;
    "Unsubscribes": string;
    "Revenue": string;
}

export interface EmailMarketingTotals {
    totalSent: number;
    totalDelivered: number;
    totalOpens: number;
    totalClicks: number;
    totalUnsubscribes: number;
    totalRevenue: number;
    avgOpenRate: string;
    avgClickRate: string;
}

// --- Analytics ---
export interface AnalyticsChannel {
    "Grupo de canales predeterminado de la sesión": string; // Or "Session default channel group"
    "Total de usuarios": string;
    "Usuarios nuevos": string;
    "Usuarios recurrentes": string;
    "Eventos clave": string;
}

export interface AnalyticsPage {
    "Ruta de la página y clase de pantalla": string;
    "Visitas": string;
}

export interface AnalyticsTotals {
    totalUsers: number;
    totalNewUsers: number;
    totalReturningUsers: number;
    totalKeyEvents: number;
}
