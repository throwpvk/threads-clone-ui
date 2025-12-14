import React from "react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileAction from "./ProfileAction";
import ProfileTabs from "./ProfileTabs";
import {
  MoreIcon,
  BellIcon,
  InsightIcon,
  InstagramIcon,
} from "@/components/icons";

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
          </div>

          {/* Avatar */}
          <Avatar className="w-20 h-20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
          </Avatar>
        </div>

        {/* Followers Count & Social Icons */}
        <div className="flex justify-between items-center mt-2">
          {/* Followers Count */}
          <div className="flex items-center gap-2">
            {isOwnProfile ? (
              <>
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
                  {user.followers || 9} followers
                </span>
              </>
            ) : (
              <span className="text-sm text-muted-foreground">
                {user.followers?.toLocaleString() || "1,560"} followers
              </span>
            )}
          </div>

          {/* Icons Area - Social Links */}
          <div className="flex gap-2">
            {isOwnProfile && (
              <button className="hover:bg-muted rounded-lg transition-colors">
                <InsightIcon width={24} height={24} />
              </button>
            )}
            <button className="hover:bg-muted rounded-lg transition-colors">
              <InstagramIcon width={24} height={24} />
            </button>
            {!isOwnProfile && (
              <>
                <button className="hover:bg-muted rounded-lg transition-colors">
                  <BellIcon width={24} height={24} />
                </button>
                <button className="hover:bg-muted rounded-lg transition-colors">
                  <MoreIcon width={24} height={24} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Profile Action Button */}
        <div className="mt-4">
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
