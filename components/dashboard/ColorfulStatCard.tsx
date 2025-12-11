import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ColorVariant = "purple" | "blue" | "pink" | "teal" | "orange" | "green";

interface ColorfulStatCardProps {
    title: string;
    value: string;
    icon?: LucideIcon;
    color: ColorVariant;
    subtext?: string;
}

const colorStyles: Record<ColorVariant, { header: string; icon: string }> = {
    purple: { header: "bg-purple-700", icon: "text-purple-400" },
    blue: { header: "bg-blue-600", icon: "text-blue-400" },
    pink: { header: "bg-pink-600", icon: "text-pink-400" },
    teal: { header: "bg-teal-600", icon: "text-teal-400" },
    orange: { header: "bg-orange-600", icon: "text-orange-400" },
    green: { header: "bg-emerald-600", icon: "text-emerald-400" },
};

export function ColorfulStatCard({ title, value, icon: Icon, color, subtext }: ColorfulStatCardProps) {
    const styles = colorStyles[color];

    return (
        <div className="rounded-xl overflow-hidden shadow-lg bg-slate-800 border border-slate-700 flex flex-col h-full">
            {/* Colored Header */}
            <div className={cn("py-2 px-4 text-center text-white font-bold uppercase tracking-wider text-sm", styles.header)}>
                {title}
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center relative">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight">
                    {value}
                </h3>

                {Icon && (
                    <div className="mt-2 mb-1 p-3 rounded-full bg-slate-900/50">
                        <Icon className={cn("w-8 h-8", styles.icon)} />
                    </div>
                )}

                {subtext && (
                    <p className="text-xs text-slate-400 mt-2">{subtext}</p>
                )}

                {/* Decorative simplified "chart" background effect or similar could go here */}
                <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
        </div>
    );
}
