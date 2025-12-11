import { SheetData } from "@/types/sheets";

interface ViewProps {
    data: SheetData;
}

export function AnalyticsView({ data }: ViewProps) {
    const { acquisitionChannels, topPages } = data;

    return (
        <div className="space-y-8 p-6">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Google Analytics</h2>
                <p className="text-slate-400">Acquisition Channels & Top Pages</p>
            </div>

            {/* Acquisition Channels */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Acquisition Channels</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Channel</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Total Users</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">New Users</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Returning</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Key Events</th>
                            </tr>
                        </thead>
                        <tbody>
                            {acquisitionChannels.map((row, idx) => {
                                const channelName = row["Primer grupo de canales principal del usuario (Grupo de canales predeterminado)"];
                                return (
                                    <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                                        <td className="py-3 px-4 text-white">{channelName}</td>
                                        <td className="py-3 px-4 text-right text-blue-400 font-medium">{row["Total de usuarios"]}</td>
                                        <td className="py-3 px-4 text-right text-emerald-400">{row["Usuarios nuevos"]}</td>
                                        <td className="py-3 px-4 text-right text-purple-400">{row["Usuarios recurrentes"]}</td>
                                        <td className="py-3 px-4 text-right text-orange-400">{row["Eventos clave"]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Top Pages */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Top 10 Pages</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Page</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Visits</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Active Users</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topPages.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                                    <td className="py-3 px-4 text-blue-400">{row["Pages"]}</td>
                                    <td className="py-3 px-4 text-right text-white font-medium">{row["Visits"]}</td>
                                    <td className="py-3 px-4 text-right text-emerald-400">{row["Active User"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
