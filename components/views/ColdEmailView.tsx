import { SheetData } from "@/types/sheets";
import { Glossary } from "@/components/dashboard/Glossary";
import { getOpenRateColor, getReplyRateColor, getBounceRateColor } from "@/lib/benchmarks";

interface ViewProps {
    data: SheetData;
}

export function ColdEmailView({ data }: ViewProps) {
    const { coldEmail } = data;

    const glossaryItems = [
        {
            term: "LEAD IN LIST",
            definition: "Total number of contacts in your target list before sending."
        },
        {
            term: "SENT",
            definition: "Number of emails successfully sent (may be lower than list due to validation)."
        },
        {
            term: "OPEN RATE",
            definition: "Percentage of recipients who opened your email.\nFormula: (Opens ÷ Sent) × 100",
            benchmark: "Cold email average: 25-40% | Good: >40% | Poor: <25%"
        },
        {
            term: "REPLY RATE",
            definition: "Percentage of recipients who replied to your email.\nFormula: (Replies ÷ Sent) × 100",
            benchmark: "Industry average: 2-5% | Good: >5% | Poor: <2%"
        },
        {
            term: "POSITIVE REPLY",
            definition: "Responses indicating genuine interest in your offering (not \"unsubscribe\" or \"not interested\").",
            benchmark: "Target: >1-2% of sent emails"
        },
        {
            term: "BOUNCE RATE",
            definition: "Emails that couldn't be delivered (invalid addresses, full inbox, etc.).",
            benchmark: "Target: Keep below 2%"
        }
    ];

    return (
        <div className="space-y-8 p-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Cold Email Report</h2>
                <p className="text-slate-400">Campaign Performance</p>
            </div>

            {/* Data Table */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Campaign Details</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Sector</th>
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">State</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Lead in list</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Sent</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Completed</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Open</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Reply</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">%</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Positive Reply</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Clic in link</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Bounced</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coldEmail.map((row, idx) => {
                                const sent = parseInt(row["Sent"]) || 1;
                                const opens = parseInt(row["Open"]) || 0;
                                const replies = parseInt(row["Reply"]) || 0;
                                const bounced = parseInt(row["Bounced"]) || 0;

                                const openRate = (opens / sent) * 100;
                                const replyRate = (replies / sent) * 100;
                                const bounceRate = (bounced / sent) * 100;

                                return (
                                    <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                                        <td className="py-3 px-4 text-white">{row["Sector"]}</td>
                                        <td className="py-3 px-4 text-slate-300">{row["State"]}</td>
                                        <td className="py-3 px-4 text-right text-blue-400">{row["Lead in list"]}</td>
                                        <td className="py-3 px-4 text-right text-emerald-400">{row["Sent"]}</td>
                                        <td className="py-3 px-4 text-right text-purple-400">{row["Completed"]}</td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getOpenRateColor(openRate)}`}>
                                            {row["Open"]}
                                        </td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getReplyRateColor(replyRate)}`}>
                                            {row["Reply"]}
                                        </td>
                                        <td className="py-3 px-4 text-right text-slate-300">{row["%"]}</td>
                                        <td className="py-3 px-4 text-right text-emerald-300">{row["Positive Reply"]}</td>
                                        <td className="py-3 px-4 text-right text-cyan-400">{row["Clic in link"]}</td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getBounceRateColor(bounceRate)}`}>
                                            {row["Bounced"]}
                                        </td>
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
