import { mockDashboardData } from "@/lib/mock-data";

export function AnalyticsView() {
    const { channels, topPages, totals } = mockDashboardData.analytics;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Google Analytics</h2>

            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-900 text-white rounded-xl p-8 shadow-sm">
                <div>
                    <p className="text-slate-400 text-sm">Total Users</p>
                    <p className="text-3xl font-bold mt-1">{totals.totalUsers.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-slate-400 text-sm">New Users</p>
                    <p className="text-3xl font-bold mt-1 text-blue-400">{totals.totalNewUsers.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-slate-400 text-sm">Returning</p>
                    <p className="text-3xl font-bold mt-1 text-purple-400">{totals.totalReturningUsers.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-slate-400 text-sm">Key Events</p>
                    <p className="text-3xl font-bold mt-1 text-emerald-400">{totals.totalKeyEvents}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Acquisition Table */}
                <div className="bg-white border rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold text-lg mb-4">Acquisition Channels</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b text-left text-slate-500">
                                <th className="pb-2 font-medium">Channel</th>
                                <th className="pb-2 text-right font-medium">Users</th>
                                <th className="pb-2 text-right font-medium">Key Events</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {channels.map((ch, idx) => (
                                <tr key={idx}>
                                    <td className="py-3">{ch["Grupo de canales predeterminado de la sesión"]}</td>
                                    <td className="py-3 text-right font-medium">{parseInt(ch["Total de usuarios"]).toLocaleString()}</td>
                                    <td className="py-3 text-right text-emerald-600">{ch["Eventos clave"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Top Pages Table */}
                <div className="bg-white border rounded-xl shadow-sm p-6">
                    <h3 className="font-semibold text-lg mb-4">Top Pages</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b text-left text-slate-500">
                                <th className="pb-2 font-medium">Page Path</th>
                                <th className="pb-2 text-right font-medium">Visits</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {topPages.map((page, idx) => (
                                <tr key={idx}>
                                    <td className="py-3 text-blue-600 truncate max-w-[200px]">{page["Ruta de la página y clase de pantalla"]}</td>
                                    <td className="py-3 text-right font-bold">{parseInt(page["Visitas"]).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
