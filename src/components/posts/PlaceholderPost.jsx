import clsx from "clsx";
import React from "react";

export default function PlaceholderPost({ label = "posts", columnCount = 1 }) {
  return (
    <div
      className={clsx("flex items-center justify-center p-10", {
        "min-w-[654px]": columnCount === 1,
        "min-w-[514px] max-w-[640px]": columnCount === 2,
        "min-w-[420px]": columnCount === 3,
        "w-[420px]": columnCount === 4,
      })}
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="text-muted-foreground">
        <p className="text-sm font-medium">No {label} yet</p>
      </div>
    </div>
  );
}
