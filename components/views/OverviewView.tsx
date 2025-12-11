import { mockDashboardData } from "@/lib/mock-data";
import { ColorfulStatCard } from "@/components/dashboard/ColorfulStatCard";
import { DollarSign, Users, Megaphone, TrendingUp, Monitor, MousePointer } from "lucide-react";

export function OverviewView() {
    const { metaAds, coldEmail, emailMarketing, analytics } = mockDashboardData;

    const totalTraffic = analytics.totals.totalUsers;
    const totalSpend = metaAds.totals.totalSpend;
    const totalRevenue = emailMarketing.totals.totalRevenue;
    const totalLeads = coldEmail.totals.totalLeads;

    return (
        <div className="space-y-8 p-2">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Marketing Command Center</h2>
                    <p className="text-slate-400 mt-1">Real-time performance across all channels</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Data Connected
                </div>
            </div>

            {/* Top Cards Row - "Slide Style" */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorfulStatCard
                    title="Total Revenue"
                    value={`$${totalRevenue.toLocaleString()}`}
                    color="purple"
                    icon={DollarSign}
                    subtext="Email Marketing Source"
                />
                <ColorfulStatCard
                    title="Ad Spend"
                    value={`$${totalSpend.toLocaleString()}`}
                    color="orange"
                    icon={Megaphone}
                    subtext="Meta Ads Campaign"
                />
                <ColorfulStatCard
                    title="Site Traffic"
                    value={totalTraffic.toLocaleString()}
                    color="teal"
                    icon={Users}
                    subtext="Unique Visitors"
                />
                <ColorfulStatCard
                    title="Active Leads"
                    value={totalLeads.toLocaleString()}
                    color="blue"
                    icon={TrendingUp}
                    subtext="Cold Email Pipeline"
                />
            </div>

            {/* Secondary Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ColorfulStatCard
                    title="Avg Open Rate"
                    value={`${emailMarketing.totals.avgOpenRate}%`}
                    color="green"
                    icon={Monitor} // Just a placeholder icon
                    subtext="Email Campaigns"
                />
                <ColorfulStatCard
                    title="Link Clicks"
                    value={metaAds.totals.totalClicks.toLocaleString()}
                    color="pink"
                    icon={MousePointer}
                    subtext="Across all ads"
                />
                <ColorfulStatCard
                    title="Reply Rate"
                    value={`${coldEmail.totals.replyRate}%`}
                    color="blue"
                    icon={Megaphone}
                    subtext="Cold Outreach"
                />
            </div>

            {/* Detailed Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                        Channel Performance
                    </h3>
                    {/* Placeholder for a Bar Chart - using simple HTML bars for now to guarantee render */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-300">
                                <span>Organic Search</span>
                                <span>5,400</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3">
                                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-300">
                                <span>Paid Search</span>
                                <span>3,200</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3">
                                <div className="bg-orange-400 h-3 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-300">
                                <span>Email</span>
                                <span>1,850</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3">
                                <div className="bg-orange-300 h-3 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                        Top Campaigns (ROI)
                    </h3>
                    <div className="space-y-4">
                        {metaAds.campaigns.slice(0, 3).map((camp, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                                <div>
                                    <p className="font-medium text-white text-sm">{camp["Campaign name"]}</p>
                                    <p className="text-xs text-slate-400">{camp.Impressions} impr.</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-emerald-400 text-sm">{camp.Results} Leads</p>
                                    <p className="text-xs text-slate-500">${camp["Amount spent (USD)"]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
