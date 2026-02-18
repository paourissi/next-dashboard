let cache = new Map();

export function fetchData(url: any) {
  if (!cache.has(url)) {
    console.log(url, cache.has(url));
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url: any) {
  return await fetchLatestInvoicesClient(url);
}

async function fetchLatestInvoicesClient(url: any) {
  try {
    console.log("fetchLatestInvoicesClient");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
