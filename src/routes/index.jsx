import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import HomePage from "@/pages/HomePage";
import ForYouPage from "@/pages/ForYouPage";
import FollowingPage from "@/pages/FollowingPage";
import GhostPostsPage from "@/pages/GhostPostsPage";
import SearchPage from "@/pages/SearchPage";
import ActivityPage from "@/pages/ActivityPage";
import ProfilePage from "@/pages/ProfilePage";
import InsightsPage from "@/pages/InsightsPage";
import SettingsPage from "@/pages/SettingsPage";
import SavedPage from "@/pages/SavedPage";
import PostDetailPage from "@/pages/PostDetailPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="for-you" element={<ForYouPage />} />
          <Route path="following" element={<FollowingPage />} />
          <Route path="ghost" element={<GhostPostsPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/:username/insights" element={<InsightsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="saved" element={<SavedPage />} />
          <Route path="post/:id" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
