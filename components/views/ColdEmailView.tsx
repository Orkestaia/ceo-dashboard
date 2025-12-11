import { Mail, Send, Eye, MessageSquare } from "lucide-react";
import { DashboardData } from "@/types/n8n";

interface ViewProps {
    data: DashboardData;
}

export function ColdEmailView({ data }: ViewProps) {
    const { campaigns, totals } = data.coldEmail;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Cold Email Outreach</h2>

            {/* Funnel Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white border rounded-xl shadow-sm border-l-4 border-l-blue-500">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Total Leads</span>
                        <Mail className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{totals.totalLeads}</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm border-l-4 border-l-indigo-500">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Sent</span>
                        <Send className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{totals.totalSent}</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm border-l-4 border-l-purple-500">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Open Rate</span>
                        <Eye className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{totals.openRate}%</p>
                    <span className="text-xs text-slate-400">{totals.totalOpens} opens</span>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm border-l-4 border-l-emerald-500">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Reply Rate</span>
                        <MessageSquare className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{totals.replyRate}%</p>
                    <span className="text-xs text-slate-400">{totals.totalReplies} replies</span>
                </div>
            </div>

            {/* Campaigns list */}
            <div className="grid gap-4 lg:grid-cols-2">
                {campaigns.map((camp, idx) => (
                    <div key={idx} className="p-6 bg-white border rounded-xl shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg text-slate-800 mb-4">{camp["Campaign Name"]}</h3>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-slate-50 p-2 rounded-lg">
                                    <span className="block text-xs text-slate-500 uppercase">Sent</span>
                                    <span className="font-bold text-slate-700">{camp.Sent}</span>
                                </div>
                                <div className="bg-slate-50 p-2 rounded-lg">
                                    <span className="block text-xs text-slate-500 uppercase">Opens</span>
                                    <span className="font-bold text-slate-700">{camp.Open}</span>
                                </div>
                                <div className="bg-emerald-50 p-2 rounded-lg">
                                    <span className="block text-xs text-emerald-600 uppercase">Pos. Replies</span>
                                    <span className="font-bold text-emerald-700">{camp["Positive Reply"]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-full bg-slate-100 rounded-full h-2">
                            <div
                                className="bg-purple-500 h-2 rounded-full"
                                style={{ width: `${(parseInt(camp.Open) / parseInt(camp.Sent)) * 100}%` }}
                            />
                        </div>
                        <p className="text-xs text-right mt-1 text-slate-400">Open Rate Performance</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
