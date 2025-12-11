import { SheetData } from "@/types/sheets";

interface ViewProps {
    data: SheetData;
}

export function MetaAdsView({ data }: ViewProps) {
    const { metaAds } = data;

    return (
        <div className="space-y-8 p-6">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Meta Ads Report</h2>
                <p className="text-slate-400">Campaign Performance</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Campaign name</th>
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
                            {metaAds.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                                    <td className="py-3 px-4 text-white">{row["Campaign name"]}</td>
                                    <td className="py-3 px-4 text-right text-red-400 font-semibold">{row["Amount spent (USD)"]}</td>
                                    <td className="py-3 px-4 text-right text-blue-400">{row["Impressions"]}</td>
                                    <td className="py-3 px-4 text-right text-purple-400">{row["CPM (cost per 1,000 impressions)"]}</td>
                                    <td className="py-3 px-4 text-right text-emerald-400">{row["Link clicks"]}</td>
                                    <td className="py-3 px-4 text-right text-orange-400">{row["CTR (all)"]}</td>
                                    <td className="py-3 px-4 text-right text-pink-400">{row["CPC (all)"]}</td>
                                    <td className="py-3 px-4 text-slate-300">{row["Result type"]}</td>
                                    <td className="py-3 px-4 text-right text-cyan-400">{row["Results"]}</td>
                                    <td className="py-3 px-4 text-right text-yellow-400">{row["Cost per result"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
