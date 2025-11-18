import React from "react";
import Column from "./Column";
import { Columns } from "lucide-react";
import clsx from "clsx";

export default function ColumnsManager({ columns = [] }) {
  return (
    <div className="w-full">
      <div
        className="flex items-start justify-start gap-4"
        style={{ alignItems: "flex-start" }}
      >
        {columns.map((col, i) => (
          <div
            key={col.id ?? i}
            className={clsx("shrink-0", { "hidden md:block": i > 0 })}
            style={{ width: col.width || "520px", maxWidth: "100%" }}
          >
            <Column title={col.title} items={col.items || 4} />
          </div>
        ))}

        {/* Desktop-only add-column rail */}
        <div className="hidden md:flex w-[50px] items-center justify-start pl-2">
          <button
            type="button"
            aria-label="Add column"
            className="flex items-center justify-center p-1 rounded-md hover:bg-accent"
            onClick={() => console.log("Add column (desktop) clicked")}
          >
            <Columns className="h-5 w-5 text-sidebar-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
