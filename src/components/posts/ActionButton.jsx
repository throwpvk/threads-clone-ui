import React from "react";

/**
 * ActionButton - Reusable button cho post actions
 * Dùng cho: Like, Comment, Repost, Share, Save
 */
export default function ActionButton({
  icon,
  count,
  isActive = false,
  activeColor = "text-foreground",
  label,
  onClick,
}) {
  const Icon = icon;
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 group"
      aria-label={label}
    >
      <div className="p-1.5 rounded-full group-hover:bg-accent transition-colors">
        <Icon
          className={`w-5 h-5 transition-colors ${
            isActive
              ? activeColor
              : "text-muted-foreground group-hover:text-foreground"
          }`}
        />
      </div>
      {count > 0 && (
        <span className="text-sm text-muted-foreground">{count}</span>
      )}
    </button>
  );
}
