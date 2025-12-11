"use client";

import { useEffect, useState } from "react";
import { OverviewView } from "@/components/views/OverviewView";
import { MetaAdsView } from "@/components/views/MetaAdsView";
import { ColdEmailView } from "@/components/views/ColdEmailView";
import { EmailMarketingView } from "@/components/views/EmailMarketingView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { fetchSheetData } from "@/lib/fetch-sheets";
import { SheetData } from "@/types/sheets";
import { Loader2 } from "lucide-react";

interface HomeProps {
  searchParams: {
    view?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const view = searchParams.view || "overview";
  const [data, setData] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const sheetData = await fetchSheetData();
        console.log("Loaded data:", sheetData);
        setData(sheetData);
      } catch (e) {
        console.error("Failed to load data:", e);
        setError("Failed to load data from Google Sheets");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin mb-2 text-primary" />
        <p>Loading data from Google Sheets...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-red-400">
        <p className="text-xl mb-2">⚠️ Error</p>
        <p>{error || "No data available"}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      {view === "overview" && <OverviewView data={data} />}
      {view === "meta-ads" && <MetaAdsView data={data} />}
      {view === "cold-email" && <ColdEmailView data={data} />}
      {view === "email-mkt" && <EmailMarketingView data={data} />}
      {view === "analytics" && <AnalyticsView data={data} />}
    </>
  );
}
