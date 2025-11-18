import React from "react";
import ColumnsManager from "@/components/columns/ColumnsManager";

export default function HomePage() {
  const columns = [
    { id: "home-main", title: "Dành cho bạn", width: "640px", items: 20 },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Home</h1>
        </header>

        <ColumnsManager columns={columns} />
      </div>
    </main>
  );
}
