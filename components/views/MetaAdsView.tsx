import { DollarSign, MousePointer, MousePointer2, TrendingUp } from "lucide-react";
import { DashboardData } from "@/types/n8n";

interface ViewProps {
    data: DashboardData;
}

export function MetaAdsView({ data }: ViewProps) {
    const { campaigns, totals } = data.metaAds;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Meta Ads Performance</h2>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Total Spend</span>
                        <DollarSign className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-2xl font-bold mt-2">${totals.totalSpend.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Impressions</span>
                        <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{totals.totalImpressions.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Avg CPC</span>
                        <MousePointer className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-2xl font-bold mt-2">${totals.avgCPC}</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Avg CTR</span>
                        <MousePointer2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{totals.avgCTR}%</p>
                </div>
            </div>

            {/* Campaigns Table */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-border">
                    <h3 className="font-semibold text-slate-800">Active Campaigns</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-3">Campaign Name</th>
                                <th className="px-6 py-3 text-right">Spend</th>
                                <th className="px-6 py-3 text-right">Impressions</th>
                                <th className="px-6 py-3 text-right">Clicks</th>
                                <th className="px-6 py-3 text-right">Results</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((camp, idx) => (
                                <tr key={idx} className="bg-white border-b hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{camp["Campaign name"]}</td>
                                    <td className="px-6 py-4 text-right">${camp["Amount spent (USD)"]}</td>
                                    <td className="px-6 py-4 text-right">{parseInt(camp["Impressions"]).toLocaleString()}</td>
                                    <td className="px-6 py-4 text-right">{parseInt(camp["Link clicks"]).toLocaleString()}</td>
                                    <td className="px-6 py-4 text-right text-emerald-600 font-semibold">{camp["Results"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
