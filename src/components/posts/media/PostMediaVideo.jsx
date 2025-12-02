import React from "react";

/**
 * PostMediaVideo - Video player component
 */
export default function PostMediaVideo({ url, thumbnail }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-muted group">
      <video
        src={url}
        poster={thumbnail}
        className="w-full h-auto"
        controls
        muted
      />
    </div>
  );
}
