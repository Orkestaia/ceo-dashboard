"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    PieChart,
    Megaphone,
    Mail,
    Send,
    BarChart3,
    Menu
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
    { icon: PieChart, label: "Overview", href: "/" },
    { icon: Megaphone, label: "Meta Ads", href: "/?view=meta-ads" },
    { icon: Mail, label: "Cold Email", href: "/?view=cold-email" },
    { icon: Send, label: "Email Marketing", href: "/?view=email-mkt" },
    { icon: BarChart3, label: "Google Analytics", href: "/?view=analytics" },
];

export function Sidebar() {
    // We use query params for simple state management in V2, 
    // checking href match is tricky with query params, so we'll do simple check
    // In a real app we'd use useSearchParams
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-md shadow-lg"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <Menu size={24} />
            </button>

            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-border transition-transform duration-300 lg:translate-x-0 shadow-sm",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
                    {/* Logo */}
                    <div className="mb-10 px-4 flex justify-center">
                        {/* Using the logo URL provided */}
                        <img
                            src="https://waterfeaturepros.com/wp-content/uploads/2025/01/Logo-150x104-1.jpg"
                            alt="Water Feature Pros"
                            className="h-16 w-auto object-contain"
                        />
                    </div>

                    <ul className="space-y-2 font-medium flex-1">
                        {sidebarItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center p-3 rounded-lg group transition-all duration-200 hover:bg-muted",
                                        // Simple active check logic could be refined
                                        "text-slate-600 hover:text-primary"
                                    )}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="ml-3">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
}
