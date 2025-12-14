import React from "react";

export default function AddPhotoIcon({
  className = "",
  width = 20,
  height = 20,
  title = "Add Photo",
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
      <circle
        cx="12.00002"
        cy="13.19075"
        r="4.5391"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      ></circle>
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        d="M18.59224,21.3742A3.40776,3.40776,0,0,0,22,17.96644V8.87419a3.40911,3.40911,0,0,0-3.40912-3.40912h-.52082a2.10819,2.10819,0,0,1-1.95388-1.37536A2.08207,2.08207,0,0,0,13.9115,2.74154h-3.823A2.08207,2.08207,0,0,0,7.88382,4.08971,2.10819,2.10819,0,0,1,5.92994,5.46507H5.40912A3.40911,3.40911,0,0,0,2,8.87419v9.09225A3.40776,3.40776,0,0,0,5.40776,21.3742Z"
      ></path>
    </svg>
  );
}
