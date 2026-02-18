import SideNav from "@/app/ui/dashboard/sidenav";
import { fetchRevenue } from "../lib/data";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const revenue = await fetchRevenue();
  console.log("Dashboard page Layout");
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
