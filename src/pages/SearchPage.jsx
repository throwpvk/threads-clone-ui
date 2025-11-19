import React from "react";
import ColumnsManager from "@/components/columns/ColumnsManager";

export default function SearchPage() {
  const columns = [
    { id: "for-you", title: "For You", width: "420px", items: 20 },
    { id: "search", title: "Search", width: "420px", items: 20 },
    { id: "trending", title: "Trending", width: "420px", items: 20 },
    { id: "trending", title: "Setting", width: "420px", items: 20 },
    { id: "trending", title: "Profile", width: "420px", items: 20 },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto p-4">
        <ColumnsManager columns={columns} />
      </div>
    </main>
  );
}
