import React from "react";
import { MoreIcon } from "@/components/icons";
import TrendingItem from "./TrendingItem";

export default function TrendingNow({ trends = [] }) {
  return (
    <div className="md:pt-4 pt-7 pb-2">
      <div className="flex items-center justify-between md:px-6 px-3 mb-2">
        <h2 className="font-semibold text-[15px] text-muted-foreground">
          Trending now
        </h2>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreIcon hasCircle={false} className="w-4 h-4" />
        </button>
      </div>
      <div className="md:px-6 px-3">
        {trends.map((trend) => (
          <TrendingItem key={trend.id} item={trend} />
        ))}
      </div>
    </div>
  );
}
