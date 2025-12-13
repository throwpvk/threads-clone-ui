import React from "react";

/**
 * PostMediaImage - Hiển thị grid images
 * Support 1-4+ images với responsive layout
 */
export default function PostMediaImage({ images = [] }) {
  if (!images || images.length === 0) return null;

  const getGridClass = () => {
    if (images.length === 1) return "grid-cols-1";
    if (images.length === 2) return "grid-cols-2";
    if (images.length === 3) return "grid-cols-2";
    return "grid-cols-2";
  };

  return (
    <div className={`grid gap-1 rounded-xl overflow-hidden ${getGridClass()}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative bg-muted ${
            images.length === 3 && index === 0 ? "row-span-2" : ""
          }`}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover aspect-square hover:brightness-95 transition-all cursor-pointer"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
