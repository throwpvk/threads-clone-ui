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
        className="rounded-xl font-semibold"
      >
        Edit profile
      </Button>
    );
  }

  return (
    <div className="flex gap-2">
      <Button
        variant="default"
        onClick={handleFollow}
        className="rounded-xl font-semibold"
      >
        Following
      </Button>
      <Button
        variant="outline"
        onClick={handleMention}
        className="rounded-xl font-semibold"
      >
        Mention
      </Button>
    </div>
  );
}
