import React from "react";

export default function SmileIcon({
  className = "",
  width = 20,
  height = 20,
  ariaLabel = "Add an emoji",
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
      <title>Add an emoji</title>
      <circle
        cx="12"
        cy="12"
        r="9.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <path
        d="M9 15V15C10.3589 17.2648 13.6411 17.2648 15 15V15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
