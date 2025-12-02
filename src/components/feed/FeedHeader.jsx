import React from "react";
import { MoreIcon } from "@/components/icons";

const tabs = [
  { id: "for-you", label: "For you" },
  { id: "following", label: "Following" },
  { id: "ghost-posts", label: "Ghost posts" },
];

export default function FeedHeader({ activeTab = "for-you", onTabChange }) {
  return (
    <div className="sticky top-0 z-10 bg-background border-b">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Tabs */}
        <div className="flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={`relative pb-3 pt-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
              )}
            </button>
          ))}
        </div>

        {/* More button */}
        <button className="p-2 hover:bg-accent rounded-full transition-colors">
          <MoreIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
