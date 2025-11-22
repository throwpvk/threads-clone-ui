import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

export default function MobileNavItem({ to, icon }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: to === "/" });
  const Icon = icon;

  return (
    <NavLink
      to={to}
      end={to === "/"}
      className="flex flex-col items-center justify-center gap-1 transition-all active:scale-90 w-16 h-10 rounded-lg"
      aria-current={match ? "page" : undefined}
    >
      <Icon
        className={`size-6 transition-colors ${
          match ? "text-foreground" : "text-muted-foreground"
        }`}
      />
    </NavLink>
  );
}
