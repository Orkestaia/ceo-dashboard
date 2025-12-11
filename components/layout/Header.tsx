import { Bell } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-30 w-full p-4 lg:px-8 h-20 flex items-center justify-between bg-white border-b border-border shadow-sm">

            <div>
                <h1 className="text-xl font-semibold text-slate-800">Executive Dashboard</h1>
                <p className="text-xs text-slate-500">Water Feature Pros</p>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500">
                    <Bell className="w-5 h-5" />
                </button>

                <div className="h-8 w-px bg-slate-200 mx-2 hidden md:block" />

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold leading-none text-slate-800">Admin</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}
