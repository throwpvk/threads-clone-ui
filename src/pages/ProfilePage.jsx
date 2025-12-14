import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ColumnsManager } from "@/components/columns";
import { ProfileColumn } from "@/components/profile";
import { mockUsers, getPostsWithUserInfo } from "@/data/mockData";

const tabs = [{ id: "profile", label: "Profile" }];

export default function ProfilePage() {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("profile");
  const [columns, setColumns] = useState([
    { id: "profile-main", title: "Profile", width: "640px" },
  ]);

  const user = mockUsers.find((u) => u.username === username) || mockUsers[0];

  const isOwnProfile = user.username === "pvkhali"; // Mock current user

  const isFinish = false; // Simple check

  const allPosts = getPostsWithUserInfo();
  const userPosts = allPosts.filter((post) => post.user.id === user.id);

  const handleAddColumn = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: `Profile ${columns.length + 1}`,
      width: "520px",
    };
    setColumns([...columns, newColumn]);
  };

  return (
    <ColumnsManager
      columns={columns.map((col) => ({
        ...col,
        content: (
          <ProfileColumn
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            user={user}
            posts={userPosts}
            showReply={true}
            enableScroll={columns.length > 1}
            isOwnProfile={isOwnProfile}
            isFinish={isFinish}
          />
        ),
      }))}
      hasAddColumnBtn={false}
      onAddColumn={handleAddColumn}
    />
  );
}
