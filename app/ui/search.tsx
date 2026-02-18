"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Test from "./test";
import { memo, useActionState, useEffect, useState } from "react";

export default function ({ totalPages, placeholder, create, a }: any) {
  const router = useRouter();
  const [input, setInput] = useState("");
  // const searchParams = useSearchParams();
  // const pathname = usePathname();

  // const { replace } = useRouter();

  // const handleSearch = useDebouncedCallback((term) => {
  //   console.log(`Searching... ${term}`);

  //   const params = new URLSearchParams(searchParams);
  //   params.set("page", "1");
  //   if (term) {
  //     params.set("query", term);
  //   } else {
  //     params.delete("query");
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }, 300);

  const handleSearch = (e: any) => {
    console.log("asdasd");
    setInput(e.target.value);
  };

  // useEffect(() => {
  //    return () => {
  //    throw new Error();
  //   };

  // }, []);

  console.log("Search", a);
  // const [state, action, pending] = useActionState(create, false);
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <form action={create}>
        <input type="text" name="Name" />
        <button type="submit">Submit</button>
      </form>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e);
        }}
        // defaultValue={searchParams.get("query")?.toString()}
      />
      {/* <Test></Test> */}
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <button
        type="button"
        onClick={() => {
          router.refresh();
        }}
      >
        {a}
        {input}
      </button>
      <Test></Test>
    </div>
  );
}
