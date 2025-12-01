import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { Trash } from "lucide-react";
import PropTypes from "prop-types";

export const DeleteDraftMenu = ({
  onDelete = () => {},
  isMobile = false,
  isModal = false,
}) => {
  return (
    <DropdownMenuContent
      className={clsx(
        "w-48 p-0 z-100 rounded-2xl bg-ring border border-border shadow-lg",
        "origin-top-right animate-in fade-in-0 zoom-in-0",
        "duration-transition-duration",
        isMobile ? "mr-15 -mt-5" : isModal ? "mr-55 -mt-5" : "mr-20 -mt-5"
      )}
    >
      <DropdownMenuItem
        onSelect={(e) => {
          e.preventDefault();
          onDelete(e);
        }}
        className={clsx(
          "flex cursor-pointer items-center justify-between px-3 py-3 text-base font-semibold rounded-xl m-2",
          "text-red-500 hover:bg-accent"
        )}
      >
        <span>Delete draft</span>
        <Trash className="size-5 text-red-500" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

DeleteDraftMenu.propTypes = {
  onDelete: PropTypes.func,
};

export default DeleteDraftMenu;
