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
        </div>
      </header>
    </article>
  );
}

export default function Column({ title = "Feed", items = 3 }) {
  return (
    <section className="bg-card p-4 rounded-xl border border-border shadow-sm h-full">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-card-foreground">{title}</h2>
      </header>

      <div className="flex flex-col gap-4">
        {Array.from({ length: items }).map((_, i) => (
          <SamplePost key={i} />
        ))}
      </div>
    </section>
  );
}
