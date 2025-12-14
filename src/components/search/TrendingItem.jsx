import React from "react";

export default function TrendingItem({ item }) {
  const handleItemClicked = () => {
    console.log("Trending item clicked:", item);
  };

  return (
    <div
      className="py-3 border-b border-border last:border-0 cursor-pointer"
      onClick={handleItemClicked}
    >
      <div className="font-semibold text-[15px] mb-0.5">{item.name}</div>
      <div className="text-muted-foreground text-[15px] leading-snug line-clamp-2">
        {item.content}
      </div>
    </div>
  );
}
