import React, { useState } from "react";
import { HeartIcon } from "@/components/icons";
import {
  MessageCircle,
  Repeat2,
  Send,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";

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
      <button
        onClick={handleLike}
        className="flex items-center gap-1.5 group"
        aria-label="Like"
      >
        <div className="p-1.5 rounded-full group-hover:bg-accent transition-colors">
          <HeartIcon
            className={`w-5 h-5 transition-colors ${
              liked
                ? "fill-red-500 text-red-500"
                : "text-muted-foreground group-hover:text-foreground"
            }`}
          />
        </div>
        {likesCount > 0 && (
          <span className="text-sm text-muted-foreground">{likesCount}</span>
        )}
      </button>

      {/* Comment */}
      <button
        onClick={onComment}
        className="flex items-center gap-1.5 group"
        aria-label="Comment"
      >
        <div className="p-1.5 rounded-full group-hover:bg-accent transition-colors">
          <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        {comments > 0 && (
          <span className="text-sm text-muted-foreground">{comments}</span>
        )}
      </button>

      {/* Repost */}
      <button
        onClick={onRepost}
        className="flex items-center gap-1.5 group"
        aria-label="Repost"
      >
        <div className="p-1.5 rounded-full group-hover:bg-accent transition-colors">
          <Repeat2 className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        {reposts > 0 && (
          <span className="text-sm text-muted-foreground">{reposts}</span>
        )}
      </button>

      {/* Share */}
      <button
        onClick={onShare}
        className="flex items-center gap-1.5 group"
        aria-label="Share"
      >
        <div className="p-1.5 rounded-full group-hover:bg-accent transition-colors">
          <Send className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        {shares > 0 && (
          <span className="text-sm text-muted-foreground">{shares}</span>
        )}
      </button>

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
