import { Bell } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-30 w-full p-4 lg:px-8 h-20 flex items-center justify-between bg-background border-b border-border shadow-sm/5">

            <div>
                {/* Breadcrumb or Page Title can go here */}
                <h1 className="text-xl font-semibold text-white hidden md:block">Exec Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
                </button>

                <div className="h-8 w-px bg-slate-800 mx-2 hidden md:block" />

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold leading-none text-white">Admin</p>
                        <p className="text-xs text-slate-500">Water Feature Pros</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-primary font-bold shadow-inner">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}
