import React from "react";

export default function AddBioIcon({
  className = "",
  width = 20,
  height = 20,
  title = "Add Bio",
  ...props
}) {
  return (
    <svg
      aria-label={title}
      role="img"
      viewBox="0 0 24 24"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        d="M6.17225,22H2V17.82775L17.29142,2.53634a1.83117,1.83117,0,0,1,2.58967,0l1.58257,1.58257a1.83117,1.83117,0,0,1,0,2.58967Z"
      ></path>
      <line
        x1="15.01842"
        x2="19.19067"
        y1="4.80933"
        y2="8.98158"
        stroke="currentColor"
        stroke-width="2"
      ></line>
    </svg>
  );
}
