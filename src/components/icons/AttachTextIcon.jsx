import React from "react";

export default function AttachTextIcon({
  className = "",
  width = 20,
  height = 20,
  ariaLabel = "Attach text",
  ...props
}) {
  return (
    <svg
      aria-label={ariaLabel}
      role="img"
      viewBox="0 0 24 24"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title>Attach text</title>
      <rect
        fill="none"
        height="20.5"
        rx="4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        width="16.5"
        x="3.75"
        y="1.75"
      />
      <rect fill="currentColor" height="1.5" rx="0.75" width="10" x="7" y="7" />
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="10"
        x="7"
        y="10"
      />
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="10"
        x="7"
        y="13"
      />
      <rect fill="currentColor" height="1.5" rx="0.75" width="6" x="7" y="16" />
    </svg>
  );
}
