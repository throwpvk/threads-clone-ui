import React from "react";

export default function BellIcon({
  className = "",
  width = 24,
  height = 24,
  ...props
}) {
  return (
    <svg
      aria-label=""
      role="img"
      viewBox="0 0 25 24"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <title></title>
      <g clip-path="url(#a)">
        <path
          d="M18.783 18.5H5.973c-2.056 0-3.392-2.162-2.473-4l.238-.397A9.801 9.801 0 0 0 5.122 9.55l.04-.808a7.096 7.096 0 0 1 14.175 0l.04.808a9.802 9.802 0 0 0 1.385 4.553L21 14.5c1.088 1.741-.164 4-2.217 4Z"
          fill="transparent"
          stroke="currentColor"
          stroke-width="2"
        ></path>
        <path
          clip-rule="evenodd"
          d="M9.035 21a3.999 3.999 0 0 0 6.93 0h-6.93Z"
          fill="currentColor"
          fill-rule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <rect
            fill="currentColor"
            height="24"
            transform="translate(.5)"
            width="24"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
