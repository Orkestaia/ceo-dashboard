import { Bell } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-30 w-full p-4 lg:px-8 h-20 flex items-center justify-between bg-background border-b border-border shadow-sm/5">

            <div>
                {/* Breadcrumb or Page Title can go here */}
                <h1 className="text-xl font-semibold text-white hidden md:block">Marketing Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-slate-800 transition-colors">
                    <Bell className="w-5 h-5 text-slate-400" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">Admin</p>
                        <p className="text-xs text-slate-400">Water Feature Pros</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}
