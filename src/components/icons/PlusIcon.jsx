import React from "react";

export default function PlusIcon({
  className = "",
  width = 24,
  height = 24,
  ...props
}) {
  return (
    <svg
      aria-label="Create"
      role="img"
      viewBox="0 0 12 12"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title>Create</title>
      <path
        d="M6 2v8m4-4H2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
