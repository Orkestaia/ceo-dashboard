"use client";

import { useEffect, useState } from "react";

export function Header() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <header className="sticky top-0 z-30 w-full p-4 lg:px-8 h-20 flex items-center justify-between bg-slate-900 border-b border-slate-800 shadow-sm">

            <div>
                <h1 className="text-2xl font-bold text-white">WFP MARKETING DASHBOARD</h1>
            </div>

            <div className="flex items-center gap-6">
                {/* Date and Time */}
                <div className="text-right">
                    <p className="text-sm font-medium text-slate-300">{formatDate(currentTime)}</p>
                    <p className="text-lg font-bold text-[#34B6D5]">{formatTime(currentTime)}</p>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">Admin</p>
                        <p className="text-xs text-slate-400">Water Feature Pros</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#34B6D5] flex items-center justify-center text-white font-semibold">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}
