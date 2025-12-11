"use client";

import { useEffect, useState } from "react";
import { OverviewView } from "@/components/views/OverviewView";
import { MetaAdsView } from "@/components/views/MetaAdsView";
import { ColdEmailView } from "@/components/views/ColdEmailView";
import { EmailMarketingView } from "@/components/views/EmailMarketingView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { fetchLiveDashboardData } from "@/lib/sheets";
import { DashboardData } from "@/types/n8n";
import { mockDashboardData } from "@/lib/mock-data";
import { Loader2 } from "lucide-react";

interface HomeProps {
  searchParams: {
    view?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const view = searchParams.view || "overview";
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const liveData = await fetchLiveDashboardData();
        setData(liveData);
      } catch (e) {
        console.error("Failed to load live data, using mock", e);
        setData(mockDashboardData);
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
        <p>Scanning Live Data...</p>
      </div>
    );
  }

  if (!data) return null;

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
