import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AddLocationIcon,
  AddPollIcon,
  AttachMediaIcon,
  AttachTextIcon,
  GifIcon,
  SmileIcon,
  XIcon,
} from "@/components/icons";

export const CreateThreadItem = ({
  index,
  showRemoveButton = false,
  onRemove,
  isFirst = false,
}) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-muted shrink-0" />
        <div className="w-0.5 flex-1 bg-border" />
      </div>

      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="font-semibold text-sm">pvkhaii</span>
            {isFirst && (
              <>
                <span className="text-muted-foreground text-xs">›</span>
                <input
                  type="text"
                  placeholder="Add a topic"
                  className="flex-1 h-auto px-0 py-0 border-none bg-transparent text-xs text-muted-foreground placeholder:text-muted-foreground outline-none"
                />
              </>
            )}
            {!isFirst && (
              <span className="text-muted-foreground text-xs">
                {index + 1}/3
              </span>
            )}
          </div>
          {showRemoveButton && (
            <button
              className="h-4 w-4 rounded-full hover:bg-transparent text-muted-foreground shrink-0"
              onClick={onRemove}
            >
              <XIcon className="h-4 w-4" />
            </button>
          )}
        </div>

        <textarea
          placeholder={isFirst ? "What's new?" : "Say more..."}
          className="w-full bg-transparent border-none outline-none resize-none text-sm placeholder:text-muted-foreground leading-5 overflow-hidden"
          rows={1}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />

        <p className="text-xs text-muted-foreground">AI info</p>

        <div className="-translate-x-2 flex items-center gap-0.5 mt-1">
          <button className="h-8 w-8 rounded-lg hover:bg-transparent cursor-pointer text-muted-foreground flex items-center justify-center">
            <AttachMediaIcon className="shrink-0" />
          </button>
          <button className="h-8 w-8 rounded-lg hover:bg-transparent cursor-pointer text-muted-foreground flex items-center justify-center">
            <GifIcon className="shrink-0" />
          </button>
          <button className="h-8 w-8 rounded-lg hover:bg-transparent cursor-pointer text-muted-foreground flex items-center justify-center">
            <SmileIcon className="shrink-0" />
          </button>
          <button className="h-8 w-8 rounded-lg hover:bg-transparent cursor-pointer text-muted-foreground flex items-center justify-center">
            <AddPollIcon className="shrink-0" />
          </button>
          <button className="h-8 w-8 rounded-lg hover:bg-transparent cursor-pointer text-muted-foreground flex items-center justify-center">
            <AttachTextIcon className="shrink-0" />
          </button>
          <button className="h-8 w-8 rounded-lg hover:bg-transparent cursor-pointer text-muted-foreground flex items-center justify-center">
            <AddLocationIcon className="shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

CreateThreadItem.propTypes = {
  index: PropTypes.number.isRequired,
  showRemoveButton: PropTypes.bool,
  onRemove: PropTypes.func,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};
