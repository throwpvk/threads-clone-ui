import React, { useState } from "react";
import { HeartIcon } from "@/components/icons";
import {
  MessageCircle,
  Repeat2,
  Send,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import ActionButton from "./ActionButton";

export default function PostActions({
  likes = 0,
  comments = 0,
  reposts = 0,
  shares = 0,
  onLike,
  onComment,
  onRepost,
  onShare,
  isLiked = false,
}) {
  const [liked, setLiked] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    onLike?.();
  };
  return (
    <div className="flex items-center gap-3 -ml-2">
      {/* Like */}
      <ActionButton
        icon={(props) => (
          <HeartIcon
            {...props}
            className={`${props.className} ${liked ? "fill-red-500 text-red-500" : ""}`}
          />
        )}
        count={likesCount}
        isActive={liked}
        activeColor="text-red-500"
        label="Like"
        onClick={handleLike}
      />

      {/* Comment */}
      <ActionButton
        icon={MessageCircle}
        count={comments}
        label="Comment"
        onClick={onComment}
      />

      {/* Repost */}
      <ActionButton
        icon={Repeat2}
        count={reposts}
        label="Repost"
        onClick={onRepost}
      />

      {/* Share */}
      <ActionButton
        icon={Send}
        count={shares}
        label="Share"
        onClick={onShare}
      />

      {/* Spacer */}
      <div className="flex-1" />
    </div>
  );
}
