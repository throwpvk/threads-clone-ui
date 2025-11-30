import PropTypes from "prop-types";
import avt from "@/assets/avt-placeholder.png";
import {
  AddLocationIcon,
  AddPollIcon,
  AttachMediaIcon,
  AttachTextIcon,
  GifIcon,
  SmileIcon,
  XIcon,
} from "@/components/icons";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export const CreateThreadItem = ({
  index,
  totalThreads,
  showRemoveButton = false,
  onRemove,
  onFocus,
  onContentChange,
  content = "",
  isFirst = false,
  isAIInfo = false,
}) => {
  return (
    <div className={clsx("flex gap-3", { "pt-4": isFirst })}>
      <div className="flex flex-col items-center">
        <img
          src={avt}
          className="mt-2 w-9 h-9 rounded-full shrink-0 border border-border"
          alt="Avatar"
        />
        <div className="mt-3 w-0.5 flex-1 bg-border" />
      </div>

      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 flex-1 min-w-0">
            <span className="font-semibold text-base">pvkhaii</span>
            {isFirst && (
              <>
                <span className="text-muted-foreground text-base pt-1 pb-0.5">
                  <ChevronRight className="size-3.5" />
                </span>
                <input
                  type="text"
                  placeholder="Add a topic"
                  className="flex-1 h-auto px-0 py-0 border-none bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground outline-none"
                  onFocus={onFocus}
                />
              </>
            )}
            {!isFirst && (
              <span className="text-muted-foreground bg-ring/50 px-2 py-1 rounded-2xl text-xs">
                {index + 1}/{totalThreads}
              </span>
            )}
          </div>
          {showRemoveButton && (
            <button
              className="h-4 w-4 rounded-full hover:bg-transparent text-muted-foreground shrink-0 "
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
          value={content}
          onFocus={onFocus}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
            onContentChange(e.target.value);
          }}
        />

        {isAIInfo && <p className="text-xs text-muted-foreground">AI info</p>}

        <div className="-translate-x-2 flex items-center gap-1 mt-1">
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
  threadId: PropTypes.number.isRequired,
  totalThreads: PropTypes.number.isRequired,
  showRemoveButton: PropTypes.bool,
  onRemove: PropTypes.func,
  onFocus: PropTypes.func,
  onContentChange: PropTypes.func,
  content: PropTypes.string,
  isFirst: PropTypes.bool,
  isActive: PropTypes.bool,
  isAIInfo: PropTypes.bool,
};
