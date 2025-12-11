import { SheetData } from "@/types/sheets";

interface ViewProps {
    data: SheetData;
}

export function ColdEmailView({ data }: ViewProps) {
    const { coldEmail } = data;

    return (
        <div className="space-y-8 p-6">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Cold Email Report</h2>
                <p className="text-slate-400">Campaign Performance</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Sender</th>
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Date</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Lead in list</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Sent</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Completed</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Open</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Reply</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Increase delay</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Clic in link</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Bounced</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coldEmail.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                                    <td className="py-3 px-4 text-white">{row["Sender"]}</td>
                                    <td className="py-3 px-4 text-slate-300">{row["Date"]}</td>
                                    <td className="py-3 px-4 text-right text-blue-400">{row["Lead in list"]}</td>
                                    <td className="py-3 px-4 text-right text-emerald-400">{row["Sent"]}</td>
                                    <td className="py-3 px-4 text-right text-purple-400">{row["Completed"]}</td>
                                    <td className="py-3 px-4 text-right text-orange-400">{row["Open"]}</td>
                                    <td className="py-3 px-4 text-right text-pink-400">{row["Reply"]}</td>
                                    <td className="py-3 px-4 text-right text-slate-400">{row["Increase delay"]}</td>
                                    <td className="py-3 px-4 text-right text-cyan-400">{row["Clic in link"]}</td>
                                    <td className="py-3 px-4 text-right text-red-400">{row["Bounced"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
