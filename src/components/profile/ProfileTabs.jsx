import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreatePostInput, PostCard, PostsWrapper } from "@/components/posts";
import FinishProfile from "./FinishProfile";

export default function ProfileTabs({
  posts = [],
  showReply = true,
  isFinish = false,
}) {
  // Filter posts by type for different tabs
  const threadPosts = posts.filter((post) => !post.isReply && !post.isRepost);
  const replyPosts = posts.filter((post) => post.isReply);
  const mediaPosts = posts.filter(
    (post) => post.images && post.images.length > 0
  );
  const repostPosts = posts.filter((post) => post.isRepost);
  const handleCreatePost = () => {
    console.log("Open create post modal");
  };
  return (
    <Tabs defaultValue="threads" className="flex-1 flex flex-col h-full">
      <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-auto">
        <TabsTrigger
          value="threads"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
        >
          Threads
        </TabsTrigger>
        <TabsTrigger
          value="replies"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
        >
          Replies
        </TabsTrigger>
        <TabsTrigger
          value="media"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
        >
          Media
        </TabsTrigger>
        <TabsTrigger
          value="reposts"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3"
        >
          Reposts
        </TabsTrigger>
      </TabsList>

      {/* Threads Tab */}
      <TabsContent value="threads" className="flex-1 overflow-auto m-0">
        {!isFinish ? (
          <FinishProfile />
        ) : (
          <PostsWrapper>
            <div className="divide-y">
              <CreatePostInput onCreateClick={handleCreatePost} />
              {threadPosts.length > 0 ? (
                threadPosts.map((post) => (
                  <PostCard key={post.id} post={post} showReply={showReply} />
                ))
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center py-12 text-center border-0">
                    <p className="text-muted-foreground">No threads yet</p>
                  </div>
                  <div className="w-200"></div>
                </>
              )}
            </div>
          </PostsWrapper>
        )}
      </TabsContent>

      {/* Replies Tab */}
      <TabsContent value="replies" className="flex-1 overflow-auto m-0">
        <PostsWrapper>
          <div className="divide-y">
            {replyPosts.length > 0 ? (
              replyPosts.map((post) => (
                <PostCard key={post.id} post={post} showReply={showReply} />
              ))
            ) : (
              <>
                <div className="flex flex-col items-center justify-center py-12 text-center border-0">
                  <p className="text-muted-foreground">No replies yet</p>
                </div>
                <div className="w-200"></div>
              </>
            )}
          </div>
        </PostsWrapper>
      </TabsContent>

      {/* Media Tab */}
      <TabsContent value="media" className="flex-1 overflow-auto m-0">
        <PostsWrapper>
          <div className="divide-y">
            {mediaPosts.length > 0 ? (
              mediaPosts.map((post) => (
                <PostCard key={post.id} post={post} showReply={showReply} />
              ))
            ) : (
              <>
                <div className="flex flex-col items-center justify-center py-12 text-center border-0">
                  <p className="text-muted-foreground">No medias yet</p>
                </div>
                <div className="w-200"></div>
              </>
            )}
          </div>
        </PostsWrapper>
      </TabsContent>

      {/* Reposts Tab */}
      <TabsContent value="reposts" className="flex-1 overflow-auto m-0">
        <PostsWrapper>
          <div className="divide-y">
            {repostPosts.length > 0 ? (
              repostPosts.map((post) => (
                <PostCard key={post.id} post={post} showReply={showReply} />
              ))
            ) : (
              <>
                <div className="flex flex-col items-center justify-center py-12 text-center border-0">
                  <p className="text-muted-foreground">No reposts yet</p>
                </div>
                <div className="w-200"></div>
              </>
            )}
          </div>
        </PostsWrapper>
      </TabsContent>
    </Tabs>
  );
}
