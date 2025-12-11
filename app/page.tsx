import { OverviewView } from "@/components/views/OverviewView";
import { MetaAdsView } from "@/components/views/MetaAdsView";
import { ColdEmailView } from "@/components/views/ColdEmailView";
import { EmailMarketingView } from "@/components/views/EmailMarketingView";
import { AnalyticsView } from "@/components/views/AnalyticsView";

interface HomeProps {
  searchParams: {
    view?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const view = searchParams.view || "overview";

  return (
    <>
      {view === "overview" && <OverviewView />}
      {view === "meta-ads" && <MetaAdsView />}
      {view === "cold-email" && <ColdEmailView />}
      {view === "email-mkt" && <EmailMarketingView />}
      {view === "analytics" && <AnalyticsView />}
    </>
  );
}
