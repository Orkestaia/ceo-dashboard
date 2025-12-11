import { DashboardData } from "@/types/n8n";

export const mockDashboardData: DashboardData = {
    lastUpdated: new Date().toISOString(),
    metaAds: {
        campaigns: [
            {
                "Campaign name": "WFP_Pond_Pumps_Q4",
                "Amount spent (USD)": "1250.50",
                "Impressions": "45000",
                "Link clicks": "1200",
                "Results": "45"
            },
            {
                "Campaign name": "WFP_Fountains_BlackFriday",
                "Amount spent (USD)": "2100.00",
                "Impressions": "85000",
                "Link clicks": "3400",
                "Results": "120"
            }
        ],
        totals: {
            totalSpend: 3350.50,
            totalImpressions: 130000,
            totalClicks: 4600,
            totalResults: 165,
            avgCPC: "0.73",
            avgCTR: "3.54"
        }
    },
    coldEmail: {
        campaigns: [
            {
                "Campaign Name": "B2B_Landscapers_Texas",
                "Lead in list": "500",
                "Sent": "480",
                "Open": "240",
                "Reply": "35",
                "Positive Reply": "5",
                "Clic in link": "40"
            },
            {
                "Campaign Name": "B2B_Architects_California",
                "Lead in list": "300",
                "Sent": "290",
                "Open": "180",
                "Reply": "15",
                "Positive Reply": "2",
                "Clic in link": "20"
            }
        ],
        totals: {
            totalLeads: 800,
            totalSent: 770,
            totalOpens: 420,
            totalReplies: 50,
            totalPositiveReplies: 7,
            totalClicks: 60,
            openRate: "54.5",
            replyRate: "6.5"
        }
    },
    emailMarketing: {
        campaigns: [
            {
                "Campaign Name": "Newsletter_November_Tips",
                "Sent": "15000",
                "Delivered": "14800",
                "Opens": "4500",
                "Clicks": "800",
                "Unsubscribes": "20",
                "Revenue": "$1,200.00"
            },
            {
                "Campaign Name": "Promo_Winter_Sale",
                "Sent": "15000",
                "Delivered": "14900",
                "Opens": "5200",
                "Clicks": "1500",
                "Unsubscribes": "45",
                "Revenue": "$5,600.00"
            }
        ],
        totals: {
            totalSent: 30000,
            totalDelivered: 29700,
            totalOpens: 9700,
            totalClicks: 2300,
            totalUnsubscribes: 65,
            totalRevenue: 6800.00,
            avgOpenRate: "32.6",
            avgClickRate: "23.7"
        }
    },
    analytics: {
        channels: [
            {
                "Grupo de canales predeterminado de la sesión": "Organic Search",
                "Total de usuarios": "5400",
                "Usuarios nuevos": "4500",
                "Usuarios recurrentes": "900",
                "Eventos clave": "120"
            },
            {
                "Grupo de canales predeterminado de la sesión": "Paid Search",
                "Total de usuarios": "3200",
                "Usuarios nuevos": "3000",
                "Usuarios recurrentes": "200",
                "Eventos clave": "250"
            }
        ],
        topPages: [
            { "Ruta de la página y clase de pantalla": "/", "Visitas": "2500" },
            { "Ruta de la página y clase de pantalla": "/products/pumps", "Visitas": "1200" },
            { "Ruta de la página y clase de pantalla": "/blog/maintenance", "Visitas": "800" }
        ],
        totals: {
            totalUsers: 8600,
            totalNewUsers: 7500,
            totalReturningUsers: 1100,
            totalKeyEvents: 370
        }
    }
};
