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
  onSave,
  isLiked = false,
  isSaved = false,
}) {
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(isSaved);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    onLike?.();
  };

  const handleSave = () => {
    setSaved(!saved);
    onSave?.();
  };

  return (
    <div className="flex items-center gap-4 pt-3">
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

      {/* Save */}
      <button
        onClick={handleSave}
        className="group p-1.5 rounded-full hover:bg-accent transition-colors"
        aria-label="Save"
      >
        {saved ? (
          <BookmarkCheck className="w-5 h-5 text-foreground" />
        ) : (
          <Bookmark className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        )}
      </button>
    </div>
  );
}
