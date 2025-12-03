import React from "react";
import clsx from "clsx";

export default function FeedColumn({ enableScroll = false, children }) {
  return (
    <section
      className={clsx("rounded-xl border-0", {
        "h-screen flex flex-col": enableScroll,
        "h-full": !enableScroll,
      })}
    >
      {children}
    </section>
  );
}
