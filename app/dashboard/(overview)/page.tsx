import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/dashboard/cards";
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from "@/app/lib/data";
import { Suspense } from "react";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from "@/app/ui/skeletons";
import Test from "@/app/ui/test";
import Search from "@/app/ui/search";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { create } from "@/app/ui/actions";
import { cacheLife } from "next/cache";
import SideNav from "@/app/ui/dashboard/sidenav";

// export const dynamic = "force-dynamic";
// export const revalidate = 10;

const Error = () => {
  return <div>error</div>;
};

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const {
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  //   numberOfInvoices,
  // } = await fetchCardData();
  // const a = Math.random();
  console.log("Dashboard Page");

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <Search a={22} create={create} placeholder="Search invoices..." />
      {/* <SideNav /> */}
      {/* <CreateInvoice /> */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense> */}
      </div>
    </main>
  );
}
