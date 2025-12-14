import React from "react";
import { Button } from "@/components/ui/button";

export default function ProfileAction({ isOwnProfile = false, userId }) {
  const handleEditProfile = () => {
    console.log("Open edit profile modal");
  };

  const handleFollow = () => {
    console.log("Follow user:", userId);
  };

  const handleMention = () => {
    console.log("Mention user:", userId);
  };

  if (isOwnProfile) {
    return (
      <Button
        variant="outline"
        onClick={handleEditProfile}
        className="w-full rounded-lg font-semibold bg-transparent hover:bg-transparent cursor-pointer active:scale-95"
      >
        Edit profile
      </Button>
    );
  }

  return (
    <div className="flex gap-3 items-center justify-center">
      <Button
        variant="outline"
        onClick={handleFollow}
        className="rounded-lg font-semibold flex-1 bg-transparent hover:bg-transparent cursor-pointer active:scale-95"
      >
        Following
      </Button>
      <Button
        variant="outline"
        onClick={handleMention}
        className="rounded-lg font-semibold flex-1 bg-transparent hover:bg-transparent cursor-pointer active:scale-95"
      >
        Mention
      </Button>
    </div>
  );
}
