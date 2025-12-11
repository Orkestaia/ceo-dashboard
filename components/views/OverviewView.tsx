import { mockDashboardData } from "@/lib/mock-data";
import { DollarSign, Users, Megaphone, TrendingUp, LucideIcon } from "lucide-react";

// Simple Card Component for local use
interface OverviewCardProps {
    label: string;
    value: string;
    subtext?: string;
    icon: LucideIcon;
    colorClass: string;
}

function OverviewCard({ label, value, subtext, icon: Icon, colorClass }: OverviewCardProps) {
    return (
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <h3 className="text-2xl font-bold mt-2 text-slate-900">{value}</h3>
                </div>
                <div className={`p-3 rounded-full ${colorClass}`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>
            {subtext && <p className="mt-4 text-xs text-slate-400">{subtext}</p>}
        </div>
    )
}

export function OverviewView() {
    const { metaAds, coldEmail, emailMarketing, analytics } = mockDashboardData;

    // Calculate Total Marketing Spend (Meta Ads only in data, but conceptually could be more)
    const totalSpend = metaAds.totals.totalSpend;
    // Calculate Total Revenue (Email Marketing only in data)
    const totalRevenue = emailMarketing.totals.totalRevenue;
    // Calculate Total Traffic
    const totalTraffic = analytics.totals.totalUsers;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-slate-800">Executive Overview</h2>
                <p className="text-slate-500 mt-1">Snapshot of performance across all marketing channels.</p>
                <p className="text-xs text-slate-400 mt-4">Last Updated: {new Date(mockDashboardData.lastUpdated).toLocaleString()}</p>
            </div>

            {/* Top Level KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <OverviewCard
                    label="Total Revenue (Email)"
                    value={`$${totalRevenue.toLocaleString()}`}
                    subtext="From Email Marketing Campaigns"
                    icon={DollarSign}
                    colorClass="bg-emerald-500"
                />
                <OverviewCard
                    label="Total Ad Spend"
                    value={`$${totalSpend.toLocaleString()}`}
                    subtext="Meta Ads"
                    icon={TrendingUp}
                    colorClass="bg-red-500"
                />
                <OverviewCard
                    label="Total Web Traffic"
                    value={totalTraffic.toLocaleString()}
                    subtext="Google Analytics Users"
                    icon={Users}
                    colorClass="bg-blue-500"
                />
                <OverviewCard
                    label="Total Leads"
                    value={coldEmail.totals.totalLeads.toLocaleString()}
                    subtext="Cold Email Pipeline"
                    icon={Megaphone}
                    colorClass="bg-purple-500"
                />
            </div>

            {/* Channel Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                    <h3 className="font-semibold text-slate-800 mb-4">Channel Performance</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="text-sm font-medium">Meta Ads ROAS</span>
                            <span className="font-bold text-slate-700">--</span>
                            {/* ROAS logic not in mock data explicitly, just placeholder */}
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="text-sm font-medium">Email Open Rate</span>
                            <span className="font-bold text-blue-600">{emailMarketing.totals.avgOpenRate}%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="text-sm font-medium">Cold Email Reply Rate</span>
                            <span className="font-bold text-emerald-600">{coldEmail.totals.replyRate}%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col justify-center items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <Megaphone className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Marketing Intelligence</h3>
                    <p className="text-slate-500 text-sm mt-2 max-w-xs">
                        Data is updated automatically every Monday via n8n integration.
                    </p>
                </div>
            </div>
        </div>
    );
}
