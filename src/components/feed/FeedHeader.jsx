import React from "react";
import { ChevronDown, Ellipsis } from "lucide-react";

export default function FeedHeader({
  tabs = [{ id: "default", label: "Feed" }],
  activeTab = "default",
  onTabChange,
  hasOptions = true,
}) {
  return (
    <div className="sticky top-0 z-10 bg-background border-0">
      <div className="flex items-center justify-between pl-4 pr-6 h-15">
        <div className="h-10 w-10"></div>
        <div className="flex-1 flex items-center justify-center gap-12">
          {/* Multiple tabs */}
          {tabs &&
            tabs.length >= 2 &&
            tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange?.(tab.id)}
                className={`relative py-4 text-[15px] font-semibold transition-colors active:opacity-50 ${
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          {/* Single tab */}
          {tabs && tabs.length === 1 && (
            <div className="flex items-center text-sm font-medium text-foreground relative">
              {tabs[0].label}
              {hasOptions && (
                <div className="absolute top-1/2 left-[calc(100%+16px)] -translate-y-1/2 h-6 w-6 rounded-full border border-border-50 shadow-sm flex items-center justify-center">
                  <ChevronDown className="size-4" />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="h-10 w-10 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border border-border-50 bg-card shadow-sm flex items-center justify-center">
            <Ellipsis className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
