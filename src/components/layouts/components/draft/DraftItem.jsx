import PropTypes from "prop-types";
import avt from "@/assets/avt-placeholder.png";
import { Ellipsis } from "lucide-react";
import { DropMenu } from "@/components/dropMenu";
import DeleteDraftMenu from "@/components/layouts/components/menu/DeleteDraftMenu";

export const DraftItem = ({
  username,
  time,
  content,
  onClick,
  onDelete,
  isModal = false,
  isMobile = false,
}) => {
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
};
