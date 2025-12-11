import React from "react";
import {
  PostMediaImage,
  PostMediaGIF,
  PostMediaVideo,
  PostMediaAudio,
  PostMediaPoll,
  PostMediaLocation,
} from "./media";
import PostQuoted from "./PostQuoted";
import PostActions from "./PostActions";

/**
 * PostContent - Orchestrator cho post content
 * Bao gồm: text content, media, quoted post, và actions
 * Chiếm row 2-4 cột 2
 */
export default function PostContent({ post }) {
  const {
    content,
    images,
    gif,
    video,
    audio,
    poll,
    location,
    quotedPost,
    likes,
    comments,
    reposts,
    shares,
  } = post;

  return (
    <div className="space-y-3">
      {/* Text content */}
      {content && (
        <div className="text-sm text-foreground whitespace-pre-wrap wrap-break-word">
          {content}
        </div>
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

      {/* Actions - luôn nằm trong PostContent */}
      <PostActions
        likes={likes}
        comments={comments}
        reposts={reposts}
        shares={shares}
      />
    </div>
  );
}
