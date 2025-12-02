import React from "react";
import clsx from "clsx";

export default function FeedColumn({ enableScroll = false, children }) {
  return (
    <section
      className={clsx("bg-card rounded-xl border border-border shadow-sm", {
        "h-screen flex flex-col": enableScroll,
        "h-full": !enableScroll,
      })}
    >
      {children}
    </section>
  );
}
