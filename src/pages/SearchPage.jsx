import React from "react";
import ColumnsManager from "@/components/columns/ColumnsManager";

export default function SearchPage() {
  const columns = [
    { id: "for-you", title: "For You", width: "520px", items: 20 },
    { id: "search", title: "Search", width: "520px", items: 20 },
    { id: "trending", title: "Trending", width: "520px", items: 20 },
    { id: "trending", title: "Setting", width: "520px", items: 20 },
    { id: "trending", title: "Profile", width: "520px", items: 20 },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Search (multi-col)
          </h1>
        </header>

        <ColumnsManager columns={columns} />
      </div>
    </main>
  );
}
