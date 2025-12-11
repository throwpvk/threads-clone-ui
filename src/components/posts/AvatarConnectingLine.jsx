import React from "react";

/**
 * AvatarConnectingLine - Vertical line connecting avatar to replies
 * Chiếm cột 1 của row 2-4 (dưới avatar)
 */
export default function AvatarConnectingLine() {
  return (
    <div className="flex justify-center w-full h-full min-h-[100px]">
      <div className="w-0.5 h-full bg-border" />
    </div>
  );
}
