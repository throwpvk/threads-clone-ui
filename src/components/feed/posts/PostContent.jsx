import React from "react";
import { useLocation } from "react-router-dom";
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

export default function PostContent({ post }) {
  const pageLocation = useLocation();
  const isActivity = pageLocation.pathname === "/activity";
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
      {content && (
        <div className="text-sm text-foreground wrap-break-word">{content}</div>
      )}
      {!isActivity && (
        <>
          {quotedPost && <PostQuoted quotedPost={quotedPost} />}
          {images && images.length > 0 && <PostMediaImage images={images} />}
          {gif && <PostMediaGIF url={gif.url} thumbnail={gif.thumbnail} />}
          {video && (
            <PostMediaVideo url={video.url} thumbnail={video.thumbnail} />
          )}
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
        </>
      )}

      <PostActions
        likes={likes}
        comments={comments}
        reposts={reposts}
        shares={shares}
      />
    </div>
  );
}
