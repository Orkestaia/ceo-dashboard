import { mockDashboardData } from "@/lib/mock-data";

export function EmailMarketingView() {
    const { campaigns, totals } = mockDashboardData.emailMarketing;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <h2 className="text-2xl font-bold text-slate-800">Email Marketing</h2>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    Generated Revenue: ${totals.totalRevenue.toLocaleString()}
                </span>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <p className="text-sm text-slate-500">Delivered</p>
                    <p className="text-xl font-bold">{totals.totalDelivered.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <p className="text-sm text-slate-500">Open Rate</p>
                    <p className="text-xl font-bold text-blue-600">{totals.avgOpenRate}%</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <p className="text-sm text-slate-500">Click Rate</p>
                    <p className="text-xl font-bold text-indigo-600">{totals.avgClickRate}%</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <p className="text-sm text-slate-500">Unsubscribes</p>
                    <p className="text-xl font-bold text-red-500">{totals.totalUnsubscribes}</p>
                </div>
            </div>

            {/* Campaign Performance */}
            <div className="space-y-4">
                {campaigns.map((camp, idx) => (
                    <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                <SendIcon />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">{camp["Campaign Name"]}</h3>
                                <p className="text-sm text-slate-500">Sent to {parseInt(camp.Sent).toLocaleString()} subscribers</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 text-center">
                            <div>
                                <p className="text-xs uppercase text-slate-400 font-semibold mb-1">Opens</p>
                                <p className="font-bold text-slate-700">{camp.Opens}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase text-slate-400 font-semibold mb-1">Clicks</p>
                                <p className="font-bold text-slate-700">{camp.Clicks}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase text-slate-400 font-semibold mb-1">Revenue</p>
                                <p className="font-bold text-emerald-600">{camp.Revenue}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SendIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
    )
}
