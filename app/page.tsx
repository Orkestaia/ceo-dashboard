import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatCard } from "@/components/dashboard/StatCard";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your business performance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Revenue"
          value="$45,231.89"
          trend="+20.1%"
          trendUp={true}
          icon={DollarSign}
        />
        <StatCard
          label="Subscriptions"
          value="+2350"
          trend="+180.1%"
          trendUp={true}
          icon={Users}
        />
        <StatCard
          label="Sales"
          value="+12,234"
          trend="+19%"
          trendUp={true}
          icon={CreditCard}
        />
        <StatCard
          label="Active Now"
          value="+573"
          trend="-2%"
          trendUp={false}
          icon={Activity}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <RevenueChart />
        </div>
        <div className="col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
