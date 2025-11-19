import React, { useState } from "react";
import ColumnsManager from "@/components/columns/ColumnsManager";

export default function HomePage() {
  const [columns, setColumns] = useState([
    { id: "home-main", title: "Dành cho bạn", width: "640px", items: 20 },
  ]);

  const handleAddColumn = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: `Column ${columns.length + 1}`,
      width: "520px",
      items: 15,
    };
    setColumns([...columns, newColumn]);
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto p-4">
        <ColumnsManager
          columns={columns}
          hasAddColumnBtn={true}
          onAddColumn={handleAddColumn}
        />
      </div>
    </main>
  );
}
