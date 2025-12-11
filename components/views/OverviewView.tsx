import { SheetData } from "@/types/sheets";
import Link from "next/link";

interface ViewProps {
    data: SheetData;
}

export function OverviewView({ data }: ViewProps) {
    const stats = [
        { label: "Analytics Channels", count: data.acquisitionChannels.length, href: "/?view=analytics", color: "bg-blue-500" },
        { label: "Top Pages", count: data.topPages.length, href: "/?view=analytics", color: "bg-purple-500" },
        { label: "Cold Email Campaigns", count: data.coldEmail.length, href: "/?view=cold-email", color: "bg-emerald-500" },
        { label: "Email Marketing Campaigns", count: data.emailMarketing.length, href: "/?view=email-mkt", color: "bg-orange-500" },
        { label: "Meta Ads Campaigns", count: data.metaAds.length, href: "/?view=meta-ads", color: "bg-pink-500" },
    ];

    return (
        <div className="space-y-8 p-6">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
                <p className="text-slate-400">Data from Google Sheets</p>
                <p className="text-xs text-slate-500 mt-2">Last updated: {new Date(data.lastUpdated).toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <Link key={idx} href={stat.href}>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-colors cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-sm">{stat.label}</p>
                                    <p className="text-3xl font-bold text-white mt-2">{stat.count}</p>
                                    <p className="text-xs text-slate-500 mt-2">rows in sheet</p>
                                </div>
                                <div className={`w-12 h-12 rounded-full ${stat.color} opacity-20`}></div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Navigation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/?view=analytics" className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                        <p className="text-white font-medium">📊 Google Analytics</p>
                        <p className="text-slate-400 text-sm mt-1">Channels & Top Pages</p>
                    </Link>
                    <Link href="/?view=cold-email" className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                        <p className="text-white font-medium">📧 Cold Email</p>
                        <p className="text-slate-400 text-sm mt-1">Campaign Performance</p>
                    </Link>
                    <Link href="/?view=email-mkt" className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                        <p className="text-white font-medium">📬 Email Marketing</p>
                        <p className="text-slate-400 text-sm mt-1">Campaign Reports</p>
                    </Link>
                    <Link href="/?view=meta-ads" className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                        <p className="text-white font-medium">📱 Meta Ads</p>
                        <p className="text-slate-400 text-sm mt-1">Ad Performance</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
