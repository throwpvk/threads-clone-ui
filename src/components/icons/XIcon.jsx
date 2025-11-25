import React from "react";

export default function XIcon({
  className = "",
  width = 16,
  height = 16,
  strokeWidth = 2,
  ...props
}) {
  return (
    <svg
      aria-label="Close"
      role="img"
      viewBox="0 0 24 24"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title>Close</title>
      <polyline
        points="20.643 3.357 12 12 3.353 20.647"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <line
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
