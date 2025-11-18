import React, { useEffect } from "react";
import { Columns } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Column from "./Column";

export default function ColumnsManager({
  columns = [],
  hasAddColumnBtn = false,
  onAddColumn,
}) {
  const isSingleColumn = columns.length === 1;
  const isMultiColumn = columns.length >= 2;

  useEffect(() => {
    if (isMultiColumn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMultiColumn]);

  const handleAddColumn = () => {
    onAddColumn?.();
  };

  return (
    <div
      className={clsx("", {
        "": isSingleColumn,
        "fixed inset-0 top-[--header-height] flex flex-col": isMultiColumn,
      })}
    >
      <div
        className={clsx("", {
          "": isSingleColumn,
          "overflow-x-auto overflow-y-hidden flex-1 scrollbar-custom":
            isMultiColumn,
        })}
      >
        <div
          className={clsx("flex items-start gap-4 px-20 py-4", {
            "justify-center": isSingleColumn,
            "justify-start h-full": isMultiColumn,
          })}
        >
          {columns.map((col, i) => (
            <div
              key={col.id ?? i}
              className={clsx("shrink-0", { "hidden md:block": i > 0 })}
              style={{ width: col.width || "420px", maxWidth: "100%" }}
            >
              <Column
                title={col.title}
                items={col.items || 4}
                enableScroll={isMultiColumn}
              />
            </div>
          ))}

          {hasAddColumnBtn && (
            <div
              className={clsx("hidden md:block shrink-0 w-20", {
                "fixed right-8 top-24": isSingleColumn,
                "h-full relative": isMultiColumn,
              })}
            >
              {isMultiColumn ? (
                <div className="sticky top-1/2 -translate-y-1/2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleAddColumn}
                        className="w-12 h-12 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        aria-label="Add column"
                      >
                        <Columns strokeWidth={2} className="size-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Add column</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleAddColumn}
                      className="w-12 h-12 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      aria-label="Add column"
                    >
                      <Columns strokeWidth={2} className="size-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Add column</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
