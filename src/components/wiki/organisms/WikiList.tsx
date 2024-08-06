"use client";

import { useEffect, useState } from "react";
import { Ubuntu } from "next/font/google";
import { getWikis, type Wiki } from "@/lib/firebase/wiki";
import { cn } from "@/lib/utils";
import WikiListItem from "@/components/wiki/molecules/WikiListItem";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function WikiList() {
  const [wikiList, setWikiList] = useState<Wiki[]>();

  useEffect(() => {
    const getWikiList = async () => {
      const { result } = await getWikis();
      if (result.length > 0) {
        setWikiList(result);
      }
    };
    getWikiList();
  }, []);

  return (
    <section
      className={cn(
        "space-y-6 max-w-7xl mx-auto px-8 select-text cursor-auto",
        ubuntu.className
      )}
      onMouseOver={() =>
        document.getElementById("cursor")?.classList.add("hidden")
      }
      onMouseLeave={() =>
        document.getElementById("cursor")?.classList.remove("hidden")
      }
    >
      {wikiList &&
        wikiList.map((item) => <WikiListItem key={item.id} item={item} />)}
    </section>
  );
}
