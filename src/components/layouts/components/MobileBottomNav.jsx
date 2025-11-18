import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { Home, Search, Heart, User, Plus } from "lucide-react";
import { Button } from "../../ui/button";

function MobileNavItem({ to, icon }) {
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
        strokeWidth={2.5}
        className={`size-6 transition-colors ${
          match ? "text-foreground" : "text-muted-foreground"
        }`}
      />
    </NavLink>
  );
}

function MobileCreateButton({ icon }) {
  const Icon = icon;
  const handleClick = () => {
    // TODO
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center transition-all active:scale-90 bg-sidebar-accent cursor-pointer text-muted-foreground w-16 h-10 rounded-md"
      aria-label="Create post"
    >
      <Icon strokeWidth={2.5} className="size-6" />
    </Button>
  );
}

const MobileBottomNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-1 py-1">
        <MobileNavItem to="/" icon={Home} />
        <MobileNavItem to="/search" icon={Search} />
        <MobileCreateButton icon={Plus} />
        <MobileNavItem to="/activity" icon={Heart} />
        <MobileNavItem to="/profile" icon={User} />
      </div>
    </nav>
  );
};

export default MobileBottomNav;
