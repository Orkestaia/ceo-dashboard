import { SheetData } from "@/types/sheets";
import { Glossary } from "@/components/dashboard/Glossary";
import { getEmailOpenRateColor, getEmailClickRateColor } from "@/lib/benchmarks";

interface ViewProps {
    data: SheetData;
}

export function EmailMarketingView({ data }: ViewProps) {
    const { emailMarketing } = data;

    const glossaryItems = [
        {
            term: "DELIVERED (Entregados)",
            definition: "Emails que llegaron exitosamente al buzón del destinatario.\nFórmula: Enviados - Rebotados"
        },
        {
            term: "OPEN RATE (Tasa de Apertura)",
            definition: "Porcentaje de emails entregados que fueron abiertos.",
            benchmark: "Promedio industria: 15-25% | Bueno: >25% | Bajo: <15%"
        },
        {
            term: "CLICK RATE (Tasa de Clics)",
            definition: "Porcentaje de aperturas que resultaron en un clic en enlace.",
            benchmark: "Promedio industria: 1.5-3% | Bueno: >3% | Bajo: <1.5%"
        },
        {
            term: "UNSUBSCRIBE RATE (Tasa de Cancelación)",
            definition: "Porcentaje de destinatarios que se dieron de baja.",
            benchmark: "Objetivo: Mantener por debajo del 0.5%"
        },
        {
            term: "REVENUE (Ingresos)",
            definition: "Ventas directas atribuidas a esta campaña de email."
        }
    ];

    return (
        <div className="space-y-8 p-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Email Marketing Reports</h2>
                <p className="text-slate-400">Campaign Performance</p>
            </div>

            {/* Data Table */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Campaign Details</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3 px-4 text-slate-300 font-medium">Send Date</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Sent</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Delivered</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Open Rate</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Opens</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Click Rate</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Clicks</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Unsubscribes</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Bounced</th>
                                <th className="text-right py-3 px-4 text-slate-300 font-medium">Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emailMarketing.map((row, idx) => {
                                const openRate = parseFloat(row["Open Rate"]) || 0;
                                const clickRate = parseFloat(row["Click Rate"]) || 0;

                                return (
                                    <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                                        <td className="py-3 px-4 text-white">{row["Send Date"]}</td>
                                        <td className="py-3 px-4 text-right text-blue-400">{row["Sent"]}</td>
                                        <td className="py-3 px-4 text-right text-emerald-400">{row["Delivered"]}</td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getEmailOpenRateColor(openRate)}`}>{row["Open Rate"]}</td>
                                        <td className="py-3 px-4 text-right text-orange-400">{row["Opens"]}</td>
                                        <td className={`py-3 px-4 text-right font-semibold ${getEmailClickRateColor(clickRate)}`}>{row["Click Rate"]}</td>
                                        <td className="py-3 px-4 text-right text-cyan-400">{row["Clicks"]}</td>
                                        <td className="py-3 px-4 text-right text-red-400">{row["Unsubscribes"]}</td>
                                        <td className="py-3 px-4 text-right text-yellow-400">{row["Bounced"]}</td>
                                        <td className="py-3 px-4 text-right text-emerald-500 font-semibold">{row["Revenue"]}</td>
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
