import { fetchInvoicesPages } from "@/app/lib/data";
import { create } from "@/app/ui/actions";
import Search from "@/app/ui/search";

export default async function Page() {
  const totalPages = await fetchInvoicesPages("22");
  console.log("Customer page", totalPages);
  return <Search a={22} create={create} placeholder="Search invoices..." />;
}
