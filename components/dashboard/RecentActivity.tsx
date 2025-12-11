import { User } from "lucide-react";

export function RecentActivity() {
    return (
        <div className="p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm shadow-sm h-full">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">John Doe</p>
                            <p className="text-xs text-muted-foreground">
                                subscribed to Ultimate Plan
                            </p>
                        </div>
                        <div className="ml-auto font-medium text-sm">+$1,999</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
