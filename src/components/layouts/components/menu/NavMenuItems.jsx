import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@/services/api/authApi";
import { logout } from "@/features/auth/authSlice";

export const NavMenuItems = ({ onNavigateToAppearance, onNavigateToFeeds }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <>
      <DropdownMenuItem
        className="cursor-pointer mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg"
        onSelect={(e) => {
          e.preventDefault();
          onNavigateToAppearance?.();
        }}
      >
        Appearance
        <DropdownMenuShortcut>
          <ChevronRight
            className="size-6 text-muted-foreground/60"
            strokeWidth="1"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Insights
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-2 bg-muted-foreground/15" />
      <DropdownMenuItem
        className="cursor-pointer mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg"
        onSelect={(e) => {
          e.preventDefault();
          onNavigateToFeeds?.();
        }}
      >
        Feeds
        <DropdownMenuShortcut>
          <ChevronRight
            className="size-6 text-muted-foreground/60"
            strokeWidth="1"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Saved
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Liked
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-2 bg-muted-foreground/15" />
      <DropdownMenuItem className="cursor-pointer mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Report a problem
      </DropdownMenuItem>
      <DropdownMenuItem
        className="cursor-pointer mx-2 pl-3 py-3 text-base text-red-500 font-bold focus:bg-input/30 focus:text-red-500 rounded-lg"
        onSelect={handleLogout}
      >
        Log out
      </DropdownMenuItem>
    </>
  );
};
