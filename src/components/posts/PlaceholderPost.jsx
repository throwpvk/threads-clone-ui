import React from "react";

export default function PlaceholderPost() {
  return (
    <article
      className="relative border-b opacity-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div
        className="md:px-6 md:py-3 p-3"
        style={{
          display: "grid",
          gridTemplateColumns: "36px 1fr",
          columnGap: "12px",
          rowGap: "0px",
          gridTemplateAreas: `"avatar header" "avatar content"`,
        }}
      >
        <div style={{ gridArea: "avatar" }} className="w-9 h-9">
          Avatar
        </div>
        <div style={{ gridArea: "header" }} className="h-5 w-40">
          Placeholder Name
        </div>
        <div style={{ gridArea: "content" }} className="mt-1 w-full">
          Placeholder content to keep the width correct. This text ensures the
          layout does not collapse when there are no posts.
        </div>
      </div>
    </article>
  );
}
