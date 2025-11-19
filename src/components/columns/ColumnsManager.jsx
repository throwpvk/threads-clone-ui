import React, { useEffect } from "react";
import clsx from "clsx";
import Column from "./Column";
import AddColumnButton from "./AddColumnButton";

export default function ColumnsManager({
  columns = [],
  hasAddColumnBtn = false,
  onAddColumn,
}) {
  const isSingleColumn = columns.length === 1;
  const isMultiColumn = columns.length >= 2;

  // Tính width cho multiple columns
  const getColumnWidthClass = () => {
    const colCount = columns.length;
    if (colCount === 2) return "w-[45%] min-w-[420px]";
    if (colCount === 3) return "w-[30%] min-w-[420px]";
    return "w-[420px]"; // 4+ columns
  };

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
          className={clsx("flex items-start py-4", {
            "justify-center": isSingleColumn,
            "justify-around h-full px-20": isMultiColumn,
          })}
        >
          {columns.map((col, i) => (
            <div
              key={col.id ?? i}
              className={clsx("shrink-0 ml-4", {
                "hidden md:block": i > 0,
                "w-[90vw] md:w-[560px] lg:w-auto lg:max-w-[640px] lg:min-w-[420px]":
                  isSingleColumn,
                [getColumnWidthClass()]: isMultiColumn,
              })}
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
              className={clsx("hidden md:block shrink-0", {
                "fixed top-[50%] -translate-y-1/2 md:left-[calc(50%+280px+50px)] lg:left-[calc(50%+min(50vw-80px,320px)+50px)]":
                  isSingleColumn,
                "h-full relative w-20": isMultiColumn,
              })}
            >
              {isMultiColumn ? (
                <div className="sticky top-1/2 -translate-y-1/2">
                  <AddColumnButton handleAddColumn={handleAddColumn} />
                </div>
              ) : (
                <AddColumnButton handleAddColumn={handleAddColumn} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
