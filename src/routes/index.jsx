import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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
import LoginPage from "@/pages/LoginPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Main App Routes */}
        <Route path="/" element={<DefaultLayout />}>
          {/* Public Routes */}
          <Route index element={<HomePage />} />
          <Route path="post/:id" element={<PostDetailPage />} />
          <Route path="profile/:username" element={<ProfilePage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="for-you" element={<ForYouPage />} />
            <Route path="following" element={<FollowingPage />} />
            <Route path="ghost" element={<GhostPostsPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="activity" element={<ActivityPage />} />
            <Route
              path="profile/:username/insights"
              element={<InsightsPage />}
            />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="saved" element={<SavedPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
