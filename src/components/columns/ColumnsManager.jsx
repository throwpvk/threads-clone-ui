import React from "react";
import Column from "./Column";
import { Columns } from "lucide-react";
import clsx from "clsx";
import { Button } from "../ui/button";

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

        <div className="hidden md:flex flex-col w-[50px] h-[100vh] items-center justify-center">
          <Button
            className="flex items-center justify-center bg-transparent text-muted-foreground hover:text-foreground hover:bg-transparent active:bg-transparent"
            onClick={() => console.log("Add column (desktop) clicked")}
          >
            <Columns strokeWidth={2} className="!size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
