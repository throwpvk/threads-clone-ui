import React from "react";
import { Play } from "lucide-react";

/**
 * PostMediaGIF - Hiển thị GIF
 */
export default function PostMediaGIF({ url, thumbnail }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-muted group cursor-pointer">
      <img
        src={thumbnail || url}
        alt="GIF"
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        <div className="bg-white/90 rounded-full px-3 py-1.5 text-xs font-semibold">
          GIF
        </div>
      </div>
    </div>
  );
}
