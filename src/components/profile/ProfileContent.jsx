import React from "react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileAction from "./ProfileAction";
import ProfileTabs from "./ProfileTabs";

export default function ProfileContent({
  user = null,
  posts = [],
  showReply = true,
  isMultiColumn = false,
  isOwnProfile = false,
  isFinish = false,
}) {
  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">User not found</p>
      </div>
    );
  }

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={clsx(
        "flex flex-col h-full overflow-hidden border border-border border-b-0 drop-shadow-xs bg-card rounded-t-3xl",
        !isMultiColumn && "custom-scrollbar"
      )}
    >
      <div className="flex flex-col p-6">
        {/* User Info Section */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            <p className="text-muted-foreground">@{user.username}</p>
            {user.bio && <p className="mt-3 text-sm">{user.bio}</p>}

            {/* Followers Count */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex -space-x-2">
                {/* Mock follower avatars */}
                <Avatar className="w-6 h-6 border-2 border-background">
                  <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                  <AvatarFallback>F1</AvatarFallback>
                </Avatar>
                <Avatar className="w-6 h-6 border-2 border-background">
                  <AvatarImage src="https://i.pravatar.cc/150?img=6" />
                  <AvatarFallback>F2</AvatarFallback>
                </Avatar>
                <Avatar className="w-6 h-6 border-2 border-background">
                  <AvatarImage src="https://i.pravatar.cc/150?img=7" />
                  <AvatarFallback>F3</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm text-muted-foreground">
                {user.followers || 8} followers
              </span>
            </div>
          </div>

          {/* Avatar */}
          <Avatar className="w-20 h-20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
          </Avatar>
        </div>

        {/* Icons Area & Action Button */}
        <div className="flex justify-between items-center mt-2">
          {/* Icons Area - Social Links */}
          <div className="flex gap-3">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </button>
          </div>

          {/* Profile Action Button */}
          <ProfileAction isOwnProfile={isOwnProfile} userId={user.id} />
        </div>
      </div>

      {/* Tabs Section */}
      <ProfileTabs
        posts={posts}
        showReply={showReply}
        isFinish={isFinish}
        isMultiColumn={isMultiColumn}
      />
    </div>
  );
}
