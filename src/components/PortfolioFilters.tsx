"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { categories } from "@/data/portfolio";

export function PortfolioFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const handleFilterChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    const queryString = params.toString();
    router.push(queryString ? `/work?${queryString}` : "/work", {
      scroll: false,
    });
  };

  return (
    <div
      role="group"
      aria-label="Filter portfolio by category"
      className="flex gap-2 flex-wrap mb-8"
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleFilterChange(cat.id)}
          aria-pressed={activeCategory === cat.id}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
            focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
            ${
              activeCategory === cat.id
                ? "bg-black text-white"
                : "bg-gray-100 text-black/60 hover:bg-gray-200"
            }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
