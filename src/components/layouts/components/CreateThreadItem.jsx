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
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full hover:bg-accent shrink-0"
              onClick={onRemove}
            >
              <XIcon className="h-4 w-4" />
            </Button>
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

        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-accent"
          >
            <AttachMediaIcon className="h-[18px] w-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-accent"
          >
            <GifIcon className="h-[18px] w-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-accent"
          >
            <SmileIcon className="h-[18px] w-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-accent"
          >
            <AddPollIcon className="h-[18px] w-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-accent"
          >
            <AttachTextIcon className="h-[18px] w-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-accent"
          >
            <AddLocationIcon className="h-[18px] w-[18px]" />
          </Button>
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
