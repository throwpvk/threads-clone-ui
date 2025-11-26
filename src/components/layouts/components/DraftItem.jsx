import PropTypes from "prop-types";
import avt from "@/assets/avt-placeholder.png";
import { Ellipsis } from "lucide-react";

export const DraftItem = ({ username, time, content, onClick }) => {
  return (
    <div
      className="flex gap-3 py-4 px-6 hover:bg-transparent cursor-pointer border-b border-border last:border-b-0"
      onClick={onClick}
    >
      <div className="shrink-0">
        <img
          src={avt}
          className="w-9 h-9 rounded-full border border-border"
          alt="Avatar"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-sm">{username}</span>
          <span className="text-muted-foreground text-sm">{time}</span>
        </div>
        <div className="text-sm text-foreground line-clamp-6 whitespace-pre-wrap wrap-break-word">
          {content}
        </div>
      </div>

      <button
        className="h-7 w-7 shrink-0 rounded-full hover:bg-accent cursor-pointer text-muted-foreground flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          // Handle menu click
        }}
      >
        <Ellipsis className="size-5" />
      </button>
    </div>
  );
};

DraftItem.propTypes = {
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
