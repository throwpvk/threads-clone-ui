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
  const scrollContainerRef = React.useRef(null);

  // Tính width cho multiple columns
  const getColumnWidthClass = () => {
    const colCount = columns.length;
    if (colCount === 2) return "w-[45%] min-w-[420px] max-w-[640px]";
    if (colCount === 3) return "w-[30%] min-w-[420px]";
    return "w-[420px]"; // 4+ columns
  };

  useEffect(() => {
    if (isMultiColumn) {
      // Lưu scroll position hiện tại
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.classList.remove("lock-scroll");
      document.body.style.top = "";
    };
  }, [isMultiColumn]);

  const handleAddColumn = () => {
    onAddColumn?.();
    // Scroll sang phải sau khi add column
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: scrollContainerRef.current.scrollWidth,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div
      className={clsx("", {
        "": isSingleColumn,
        "fixed inset-0 top-[--header-height] flex flex-col": isMultiColumn,
      })}
    >
      <div
        ref={scrollContainerRef}
        className={clsx("flex items-start", {
          "justify-center md:mr-20": isSingleColumn,
          "h-full w-full pl-0 md:pl-24 overflow-x-auto overflow-y-hidden flex-1 scrollbar-custom":
            isMultiColumn,
        })}
      >
        <div
          className={clsx("flex items-start gap-4", {
            "mx-auto": isMultiColumn,
            "h-full": isMultiColumn,
          })}
        >
          {columns.map((col, i) => (
            <div
              key={col.id ?? i}
              className={clsx("shrink-0", {
                "hidden md:block": i > 0,
                "w-screen md:w-[560px] lg:w-auto lg:max-w-[656px] lg:min-w-[420px]":
                  isSingleColumn,
                [getColumnWidthClass()]: isMultiColumn,
              })}
            >
              {col.content ? (
                col.content
              ) : (
                <Column
                  title={col.title}
                  items={col.items || 4}
                  enableScroll={isMultiColumn}
                />
              )}
            </div>
          ))}

          {hasAddColumnBtn && (
            <div
              className={clsx("hidden md:block shrink-0", {
                "fixed top-[50%] -translate-y-1/2 md:left-[calc(50%+280px)] lg:left-[calc(50%+min(50vw-80px,328px))]":
                  isSingleColumn,
                "h-full relative w-20 -ml-4": isMultiColumn,
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
