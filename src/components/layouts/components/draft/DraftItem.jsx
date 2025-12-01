import PropTypes from "prop-types";
import avt from "@/assets/avt-placeholder.png";
import { Ellipsis } from "lucide-react";
import { DropMenu } from "@/components/dropMenu";
import DeleteDraftMenu from "@/components/layouts/components/menu/DeleteDraftMenu";

// Format relative time
const formatRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffMinutes < 1) return "now";
  if (diffMinutes < 60) return `${diffMinutes}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 30) return `${diffDays}d`;
  if (diffMonths < 12) return `${diffMonths}mo`;
  return `${diffYears}y`;
};

// Format full datetime for title
const formatFullDateTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const DraftItem = ({
  username,
  time,
  content,
  onClick,
  onDelete,
  isModal = false,
  isMobile = false,
  threadCount = 1,
}) => {
  const hasMultipleThreads = threadCount > 1;
  const relativeTime = formatRelativeTime(time);
  const fullDateTime = formatFullDateTime(time);

  return (
    <div className="flex items-center justify-between relative">
      <div
        className="flex-1 flex gap-3 py-6 px-6 hover:bg-transparent cursor-pointer border-t border-border last:border-b-0"
        onClick={(e) => {
          const target = e.target || e.nativeEvent?.target;
          try {
            if (
              target &&
              target.closest &&
              target.closest('[aria-label="Draft options"]')
            ) {
              return;
            }
          } catch {
            // ignore
          }
          if (onClick) onClick(e);
        }}
      >
        <div className="shrink-0 flex flex-col items-center">
          <img
            src={avt}
            className="w-9 h-9 rounded-full border border-border"
            alt="Avatar"
          />
          {hasMultipleThreads && (
            <>
              <div className="w-0.5 flex-1 bg-border my-2" />
              <img
                src={avt}
                className="w-4 h-4 rounded-full border border-border"
                alt="Avatar small"
              />
            </>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-sm">{username}</span>
            <span
              className="text-muted-foreground text-sm cursor-default"
              title={fullDateTime}
            >
              {relativeTime}
            </span>
          </div>
          <div className="text-sm text-foreground line-clamp-6 whitespace-pre-wrap wrap-break-word max-w-prose">
            {content}
          </div>
          {hasMultipleThreads && (
            <div className="text-xs text-muted-foreground mt-2">
              {threadCount} replies
            </div>
          )}
        </div>
      </div>

      <DropMenu
        content={
          <DeleteDraftMenu
            isMobile={isMobile}
            isModal={isModal}
            onDelete={() => onDelete && onDelete()}
          />
        }
      >
        <button
          className="absolute top-5 right-5 h-7 w-7 shrink-0 rounded-full hover:bg-accent cursor-pointer text-muted-foreground flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-label="Draft options"
        >
          <Ellipsis className="size-5" />
        </button>
      </DropMenu>
    </div>
  );
};

DraftItem.propTypes = {
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  isModal: PropTypes.bool,
  isMobile: PropTypes.bool,
  threadCount: PropTypes.number,
};
