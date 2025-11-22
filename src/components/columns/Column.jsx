import React from "react";
import clsx from "clsx";
import SamplePost from "./SamplePost";

export default function Column({
  title = "Feed",
  items = 3,
  enableScroll = false,
}) {
  return (
    <section
      className={clsx("bg-card rounded-xl border border-border shadow-sm", {
        "h-screen flex flex-col": enableScroll,
        "h-full p-4": !enableScroll,
      })}
    >
      <header
        className={clsx(
          "flex items-center justify-between shrink-0",
          enableScroll ? "px-4 pt-4 pb-2" : "mb-4"
        )}
      >
        <h2 className="text-lg font-semibold text-card-foreground">{title}</h2>
      </header>

      <div
        className={clsx("flex flex-col gap-4", {
          "overflow-y-auto flex-1 px-4 pb-4 scrollbar-custom": enableScroll,
          "": !enableScroll,
        })}
      >
        {Array.from({ length: items }).map((_, i) => (
          <SamplePost key={i} />
        ))}
      </div>
    </section>
  );
}
