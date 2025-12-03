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
      <div className="flex items-center justify-between px-4 h-14">
        <div className="h-10 w-10"></div>
        <div className="flex-1 flex items-center justify-center gap-6">
          {/* Multiple tabs */}
          {tabs &&
            tabs.length >= 2 &&
            tabs.map((tab) => (
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
          <div className="h-6 w-6 rounded-full border border-border-50 shadow-sm flex items-center justify-center">
            <Ellipsis className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
