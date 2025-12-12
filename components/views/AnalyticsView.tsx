import { SheetData } from "@/types/sheets";
import { Glossary } from "@/components/dashboard/Glossary";

interface ViewProps {
    data: SheetData;
}

export function AnalyticsView({ data }: ViewProps) {
    const { acquisitionChannels, topPages } = data;

    const glossaryItems = [
        {
            term: "USERS (Usuarios)",
            definition: "Visitantes únicos a tu sitio web (contados una vez incluso si visitan múltiples veces)."
        },
        {
            term: "NEW USERS (Usuarios Nuevos)",
            definition: "Visitantes que nunca han estado en tu sitio antes."
        },
        {
            term: "RETURNING USERS (Usuarios Recurrentes)",
            definition: "Visitantes que han estado en tu sitio anteriormente."
        },
        {
            term: "KEY EVENTS (Eventos Clave)",
            definition: "Acciones importantes que los visitantes realizan (envíos de formularios, compras, registros, etc.)"
        },
        {
            term: "CHANNELS (Canales)",
            definition: "Direct: Personas que escribieron tu URL directamente o usaron un marcador\n\nOrganic Search: Personas que te encontraron a través de búsqueda en Google/Bing\n\nPaid Social: Tráfico de anuncios pagados en redes sociales (Facebook, Instagram, etc.)\n\nOrganic Social: Tráfico de publicaciones no pagadas en redes sociales\n\nReferral: Tráfico de enlaces en otros sitios web\n\nEmail: Tráfico de campañas de email"
        }
    ];

    return (
        <div className="space-y-8 p-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Google Analytics</h2>
                <p className="text-slate-400">Acquisition Channels & Top Pages</p>
            </div>

            {/* Acquisition Channels Table */}
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

            {/* Top Pages Table */}
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

            {/* Glossary */}
            <Glossary items={glossaryItems} />
        </div>
    );
}
