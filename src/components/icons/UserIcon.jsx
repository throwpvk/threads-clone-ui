import React from "react";

export default function UserIcon({
  className = "",
  solid = false,
  width = 24,
  height = 24,
  ...props
}) {
  const common = {
    "aria-label": "Profile",
    role: "img",
    viewBox: "0 0 26 26",
    className,
    width,
    height,
    ...props,
  };

  if (solid) {
    return (
      <svg {...common}>
        <title>Profile</title>
        <circle
          cx="13"
          cy="7.25"
          r="5"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M5.26678 24.5H20.744C22.603 24.5 23.75 23.9686 23.75 22.8173C23.75 19.6212 19.5538 15.25 13 15.25C6.44625 15.25 2.25 19.6212 2.25 22.8173C2.25 23.9686 3.39704 24.5 5.26678 24.5Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <title>Profile</title>
      <circle
        cx="13"
        cy="7.25"
        r="5"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M5.26678 24.5H20.744C22.603 24.5 23.75 23.9686 23.75 22.8173C23.75 19.6212 19.5538 15.25 13 15.25C6.44625 15.25 2.25 19.6212 2.25 22.8173C2.25 23.9686 3.39704 24.5 5.26678 24.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}
