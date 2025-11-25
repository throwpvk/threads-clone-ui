import React from "react";

export default function AddPollIcon({
  className = "",
  width = 20,
  height = 20,
  ariaLabel = "Add a poll",
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
      <title>Add a poll</title>
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="8"
        x="4"
        y="5.5"
      />
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="16"
        x="4"
        y="11.25"
      />
      <rect
        fill="currentColor"
        height="1.5"
        rx="0.75"
        width="11"
        x="4"
        y="17"
      />
    </svg>
  );
}
