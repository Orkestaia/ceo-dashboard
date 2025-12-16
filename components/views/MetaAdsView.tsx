import { SheetData } from "@/types/sheets";
import { Glossary } from "@/components/dashboard/Glossary";
import { getCTRColor, getCPCColor, getCPMColor } from "@/lib/benchmarks";

interface ViewProps {
    data: SheetData;
}

export function MetaAdsView({ data }: ViewProps) {
    const { metaAds } = data;

    const glossaryItems = [
        {
            term: "IMPRESSIONS",
            definition: "Number of times your ad was displayed on screen.",
        },
        {
            term: "CTR (Click-Through Rate)",
            definition: "Percentage of people who clicked your ad after seeing it.\nFormula: (Clicks ÷ Impressions) × 100",
            benchmark: "Industry average: 0.9-1.5% | Good: >1.5% | Poor: <0.9%"
        },
        {
            term: "CPC (Cost Per Click)",
            definition: "Average amount you pay each time someone clicks your ad.\nFormula: Total Spend ÷ Total Clicks\nLower is better.",
            benchmark: "Industry average: $0.80-$1.50 | Good: <$0.80 | High: >$1.50"
        },
        {
            term: "CPM (Cost Per Mille)",
            definition: "Cost per 1,000 impressions. How much you pay to show your ad 1,000 times.\nFormula: (Total Spend ÷ Impressions) × 1000",
            benchmark: "Industry average: $10-$15 | Good: <$10 | High: >$15"
        },
        {
            term: "RESULTS",
            definition: "The specific action you optimized your campaign for (link clicks, landing page views, purchases, leads, etc.)"
        },
        {
            term: "COST PER RESULT",
            definition: "Average cost to achieve one result/conversion.\nFormula: Total Spend ÷ Total Results"
        }
    ];

    return (
        <div className="space-y-8 p-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Meta Ads Report</h2>
                <p className="text-slate-400">Campaign Performance Overview</p>
            </div>

            {/* Data Table */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Campaign Details</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Campaign name</th>
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Status</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Amount spent (USD)</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Impressions</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">CPM</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Link clicks</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">CTR (all)</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">CPC (all)</th>
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Result type</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Results</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Cost per result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {metaAds.map((row, idx) => {
                                const isTotalRow = row["Campaign name"] === "TOTAL";
                                const ctr = parseFloat(row["CTR (all)"]) || 0;
                                const cpc = parseFloat(row["CPC (all)"].replace(',', '.')) || 0;
                                const cpm = parseFloat(row["CPM (cost per 1,000 impressions)"]) || 0;

                                return (
                                    <tr key={idx} className={`border-b border-slate-700/50 hover:bg-slate-700/30 ${isTotalRow ? "font-bold bg-slate-800" : ""}`}>
                                        <td className="py-3 px-4 text-white">{row["Campaign name"]}</td>
                                        <td className="py-3 px-4">
                                            {!isTotalRow && (
                                                <div className="flex items-center gap-2">
                                                    {row["status"]?.toLowerCase() === "active" && (
                                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                    )}
                                                    <span className={`text-sm ${row["status"]?.toLowerCase() === "active" ? "text-emerald-400" : "text-slate-500"}`}>
                                                        {row["status"] || "-"}
                                                    </span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="py-3 px-4 text-right text-red-400 font-semibold">{row["Amount spent (USD)"]}</td>
                                        <td className="py-3 px-4 text-right text-blue-400">{row["Impressions"]}</td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getCPMColor(cpm)}`}>{row["CPM (cost per 1,000 impressions)"]}</td>
                                        <td className="py-3 px-4 text-right text-emerald-400">{row["Link clicks"]}</td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getCTRColor(ctr)}`}>{row["CTR (all)"]}</td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getCPCColor(cpc)}`}>{row["CPC (all)"]}</td>
                                        <td className="py-3 px-4 text-slate-300">{row["Result type"]}</td>
                                        <td className="py-3 px-4 text-right text-cyan-400">{row["Results"]}</td>
                                        <td className="py-3 px-4 text-right text-yellow-400">{row["Cost per result"]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Glossary */}
            <Glossary items={glossaryItems} />
        </div>
    );
}
