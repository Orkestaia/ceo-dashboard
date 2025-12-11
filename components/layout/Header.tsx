import { Bell, Search } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-30 w-full p-4 lg:px-8 h-20 flex items-center justify-between backdrop-blur-md bg-background/50 border-b border-border/40 supports-[backdrop-filter]:bg-background/20">

            {/* Search / Title Area */}
            <div className="flex items-center gap-4 w-1/3">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search analytics..."
                        className="w-full h-10 pl-10 pr-4 rounded-full bg-muted/50 border-none focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-muted-foreground/70 transition-all"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
                </button>

                <div className="h-8 w-px bg-border mx-2 hidden md:block" />

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold leading-none">Aitor CEO</p>
                        <p className="text-xs text-muted-foreground mt-1">admin@dashboard.com</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg ring-2 ring-background flex items-center justify-center text-white font-bold">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}
