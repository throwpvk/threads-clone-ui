import React from "react";

function SamplePost() {
  return (
    <article className="bg-popover text-popover-foreground rounded-md p-4 border border-border">
      <header className="flex items-start gap-3">
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center text-secondary-foreground"
          style={{ background: "var(--secondary)" }}
        >
          U
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-card-foreground">
                User Name
              </h3>
              <p className="text-xs text-muted-foreground">@username · 2h</p>
            </div>
            <div className="text-sm text-muted-foreground">•••</div>
          </div>
          <p className="mt-3 text-sm text-popover-foreground">
            Đây là nội dung mẫu cho post. Sử dụng biến màu từ `index.css` để giữ
            consistency giữa light và dark mode.
          </p>
          <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
            <button className="hover:text-primary">Like</button>
            <button className="hover:text-primary">Reply</button>
            <button className="hover:text-primary">Share</button>
          </div>
        </div>
      </header>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-4xl mx-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Home</h1>
          <button
            className="px-3 py-1 rounded-md text-primary-foreground"
            style={{ background: "var(--primary)" }}
          >
            Create
          </button>
        </header>

        <section className="space-y-4">
          <SamplePost />
          <SamplePost />
          <SamplePost />
        </section>
      </div>
    </main>
  );
}
