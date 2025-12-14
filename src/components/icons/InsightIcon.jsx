import React from "react";

export default function InsightIcon({
  className = "",
  width = 24,
  height = 24,
  ...props
}) {
  return (
    <svg
      aria-label="Insights"
      role="img"
      viewBox="0 0 24 24"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title>Insights</title>
      <rect
        fill="none"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        width="20"
        x="2"
        y="2"
      ></rect>
      <rect height="12" rx="1" width="2" x="11" y="6"></rect>
      <rect height="9" rx="1" width="2" x="15" y="9"></rect>
      <rect height="5" rx="1" width="2" x="7" y="13"></rect>
    </svg>
  );
}
