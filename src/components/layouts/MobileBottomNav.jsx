import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, PlusCircle, Heart, User } from "lucide-react";

const MobileBottomNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-4 py-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          <Home className="size-6" />
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          <Search className="size-6" />
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          <PlusCircle className="size-6" />
        </NavLink>
        <NavLink
          to="/activity"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          <Heart className="size-6" />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          <User className="size-6" />
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
