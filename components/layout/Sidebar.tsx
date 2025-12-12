"use client";

import Link from "next/link";
import Image from "next/image";
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
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md shadow-lg border border-slate-700"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <Menu size={24} />
            </button>

            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen w-64 bg-slate-900 border-r border-slate-800 transition-transform duration-300 lg:translate-x-0 shadow-xl",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
                    {/* Logo */}
                    <div className="mb-8 px-4 py-4 flex justify-center">
                        <Image
                            src="/wfp-logo.png"
                            alt="Water Feature Pros"
                            width={150}
                            height={104}
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </div>

                    <ul className="space-y-2 font-medium flex-1">
                        {sidebarItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center p-3 rounded-lg group transition-all duration-200 border border-transparent",
                                        "text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700"
                                    )}
                                >
                                    <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                                    <span className="ml-3">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="p-4 mt-auto">
                        <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl p-4 border border-white/5">
                            <p className="text-xs text-slate-400">Connected to</p>
                            <p className="text-sm font-semibold text-white truncate">Google Sheets Live</p>
                        </div>
                    </div>

                </div>
            </aside>

            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
}
