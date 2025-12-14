import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatFollowers } from "@/lib/utils";
import { UserIcon } from "@/components/icons";

export default function FollowSuggestionItem({ user }) {
  return (
    <div className="flex gap-3 py-4 border-b border-border last:border-0">
      <Avatar className="w-9 h-9 mt-1 border border-border/50">
        <AvatarImage src={user.avatar} alt={user.username} />
        <AvatarFallback>
          <UserIcon className="w-5 h-5 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <div className="font-semibold text-[15px] flex items-center gap-1 truncate">
              {user.username}
              {user.isVerified && (
                <svg
                  aria-label="Verified"
                  className="x1lliihq x1n2onr6"
                  color="rgb(0, 149, 246)"
                  fill="rgb(0, 149, 246)"
                  height="12"
                  role="img"
                  viewBox="0 0 40 40"
                  width="12"
                >
                  <title>Verified</title>
                  <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" />
                </svg>
              )}
            </div>
            <div className="text-muted-foreground text-[15px] truncate">
              {user.description}
            </div>
          </div>
          <Button className="h-8 px-5 rounded-xl font-semibold cursor-pointer">
            Follow
          </Button>
        </div>

        <div className="mt-1 text-[15px] whitespace-pre-line leading-snug">
          {user.content}
        </div>

        <div className="mt-2.5 text-[15px] text-muted-foreground">
          {formatFollowers(user.followersCount)} followers
        </div>
      </div>
    </div>
  );
}
