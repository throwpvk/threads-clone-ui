import React from "react";

export default function AddLocationIcon({
  className = "",
  width = 18,
  height = 20,
  ariaLabel = "Add a location",
  ...props
}) {
  return (
    <svg
      aria-label={ariaLabel}
      role="img"
      viewBox="0 0 18 20"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title>Add a location</title>
      <path
        clipRule="evenodd"
        d="M9 0C4.30556 0 0.5 3.68841 0.5 8.18182C0.5 13.6821 6.49276 18.2668 8.41451 19.7965C8.58496 19.9321 8.79249 20 9 20C9.20751 20 9.41509 19.9321 9.58556 19.7965C11.5073 18.2668 17.5 13.6821 17.5 8.18182C17.5 3.68841 13.6945 0 9 0ZM9 18.5C6.83638 16.7645 2 12.3568 2 8.18182C2 4.67291 5.35463 1.5 9 1.5C12.6454 1.5 16 4.67291 16 8.18182C16 12.3568 11.1635 16.7645 9 18.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M10.7 8.33333C10.7 9.25381 9.93888 10 9 10C8.06112 10 7.3 9.25381 7.3 8.33333C7.3 7.41286 8.06112 6.66667 9 6.66667C9.93888 6.66667 10.7 7.41286 10.7 8.33333Z"
        fill="currentColor"
      />
    </svg>
  );
}
