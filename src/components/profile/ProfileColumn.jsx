import React from "react";
import clsx from "clsx";
import ProfileContent from "./ProfileContent";
import Header from "../common/Header";

const tabDefault = [{ id: "profile", label: "Profile" }];

export default function ProfileColumn({
  tabs = tabDefault,
  isMultiColumn = false,
  activeTab = "profile",
  onTabChange,
  hasOptions = false,
  user = null,
  posts = [],
  showReply = true,
  enableScroll = false,
  isOwnProfile = false,
  isFinish = false,
}) {
  return (
    <section
      className={clsx(
        "w-full rounded-xl border-0 relative h-[calc(100dvh-60px)]",
        {
          "flex flex-col": enableScroll,
        }
      )}
    >
      <Header
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        hasOptions={hasOptions}
      />

      <ProfileContent
        user={user}
        posts={posts}
        showReply={showReply}
        isMultiColumn={isMultiColumn}
        isOwnProfile={isOwnProfile}
        isFinish={isFinish}
      />
    </section>
  );
}
