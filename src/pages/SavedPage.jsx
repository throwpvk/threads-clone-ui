import React, { useState } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn } from "@/components/feed";
import { PostCard, PostsWrapper } from "@/components/posts";
import { getPostsWithUserInfo } from "@/data/mockData";
import { Bookmark, Grid3x3, List } from "lucide-react";

export default function SavedPage() {
  const [view, setView] = useState("list"); // 'list' | 'grid'
  const [filter, setFilter] = useState("all"); // 'all' | 'my-posts' | 'others'
  const [columns, setColumns] = useState([
    { id: "saved-main", title: "Saved" },
  ]);

  // Mock saved posts
  const posts = getPostsWithUserInfo().slice(0, 2);

  const handleAddColumn = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: `Saved ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
  };

  return (
    <ColumnsManager
      columns={columns.map((col) => ({
        ...col,
        content: (
          <FeedColumn enableScroll={columns.length > 1}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-background border-b">
                <div className="flex items-center justify-between px-4 h-14">
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-5 h-5" />
                    <h1 className="text-lg font-semibold">Saved</h1>
                  </div>

                  {/* View toggle */}
                  <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setView("list")}
                      className={`p-1.5 rounded transition-colors ${
                        view === "list"
                          ? "bg-background shadow-sm"
                          : "hover:bg-accent"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setView("grid")}
                      className={`p-1.5 rounded transition-colors ${
                        view === "grid"
                          ? "bg-background shadow-sm"
                          : "hover:bg-accent"
                      }`}
                    >
                      <Grid3x3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Filters */}
                <div className="px-4 pb-3 flex gap-2">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      filter === "all"
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter("my-posts")}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      filter === "my-posts"
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    My posts
                  </button>
                  <button
                    onClick={() => setFilter("others")}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      filter === "others"
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    Others
                  </button>
                </div>
              </div>

              <PostsWrapper>
                {posts.length > 0 ? (
                  <div className="divide-y">
                    {posts.map((post) => (
                      <PostCard key={post.id} post={post} showReply={false} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center px-4">
                    <Bookmark className="w-12 h-12 text-muted-foreground mb-4" />
                    <h2 className="text-xl font-semibold mb-2">
                      No saved posts
                    </h2>
                    <p className="text-muted-foreground">
                      Posts you save will appear here
                    </p>
                  </div>
                )}
              </PostsWrapper>
            </div>
          </FeedColumn>
        ),
      }))}
      hasAddColumnBtn={true}
      onAddColumn={handleAddColumn}
    />
  );
}
