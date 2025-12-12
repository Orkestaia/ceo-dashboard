"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

interface GlossaryItem {
    term: string;
    definition: string;
    benchmark?: string;
}

interface GlossaryProps {
    items: GlossaryItem[];
}

export function Glossary({ items }: GlossaryProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/70 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[#34B6D5]" />
                    <h3 className="text-lg font-semibold text-white">📖 Metric Definitions</h3>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
            </button>

            {isOpen && (
                <div className="px-6 py-4 space-y-4 border-t border-slate-700 bg-slate-900/30">
                    {items.map((item, idx) => (
                        <div key={idx} className="pb-4 border-b border-slate-800 last:border-0 last:pb-0">
                            <h4 className="font-semibold text-white mb-2">{item.term}</h4>
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                                {item.definition}
                            </p>
                            {item.benchmark && (
                                <p className="text-xs text-[#34B6D5] mt-2 font-medium">
                                    ✓ {item.benchmark}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
