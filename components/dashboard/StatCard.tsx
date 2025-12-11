import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    icon: LucideIcon;
    description?: string;
}

export function StatCard({ label, value, trend, trendUp, icon: Icon, description }: StatCardProps) {
    return (
        <div className="p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <h3 className="text-2xl font-bold mt-1">{value}</h3>
                </div>
                <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="w-5 h-5 text-primary" />
                </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
                <span
                    className={cn(
                        "font-medium px-2 py-0.5 rounded-full",
                        trendUp ? "text-emerald-500 bg-emerald-500/10" : "text-red-500 bg-red-500/10"
                    )}
                >
                    {trend}
                </span>
                <span className="text-muted-foreground ml-2">vs last month</span>
            </div>

            {
                description && (
                    <p className="mt-4 text-xs text-muted-foreground">{description}</p>
                )
            }
        </div >
    );
}
