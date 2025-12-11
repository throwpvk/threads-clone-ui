import React from "react";
import { Languages } from "lucide-react";
import {
  PostMediaImage,
  PostMediaGIF,
  PostMediaVideo,
  PostMediaAudio,
  PostMediaPoll,
  PostMediaLocation,
} from "./media";
import PostQuoted from "./PostQuoted";

/**
 * PostContent - Orchestrator cho post content
 * Render text + media types (image, gif, video, audio, poll, location, quoted post)
 */
export default function PostContent({ post, onTranslate }) {
  const {
    content,
    hasTranslate,
    images,
    gif,
    video,
    audio,
    poll,
    location,
    quotedPost,
  } = post;

  return (
    <div className="space-y-3">
      {/* Text content */}
      {content && (
        <p className="text-sm text-foreground whitespace-pre-wrap wrap-break-word">
          {content}
        </p>
      )}

      {/* Quoted post - hiển thị trước media */}
      {quotedPost && <PostQuoted quotedPost={quotedPost} />}

      {/* Media - chỉ render 1 loại media */}
      {images && images.length > 0 && <PostMediaImage images={images} />}
      {gif && <PostMediaGIF url={gif.url} thumbnail={gif.thumbnail} />}
      {video && <PostMediaVideo url={video.url} thumbnail={video.thumbnail} />}
      {audio && (
        <PostMediaAudio
          url={audio.url}
          title={audio.title}
          artist={audio.artist}
          cover={audio.cover}
        />
      )}
      {poll && <PostMediaPoll poll={poll} />}
      {location && <PostMediaLocation location={location} />}

      {/* Translate button */}
      {/* {hasTranslate && (
        <button
          onClick={onTranslate}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Languages className="w-4 h-4" />
          <span className="text-xs">Translate</span>
        </button>
      )} */}
    </div>
  );
}
