import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PlusIcon } from "@/components/icons";

export default function CreateButtonFixed({
  tooltipContent = "Create New Thread",
  handleCreate = () => {},
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="fixed bottom-6 right-6 hidden md:block">
          <button
            variant="ghost"
            size="icon"
            onClick={handleCreate}
            aria-label={tooltipContent}
            className="w-[82px] h-[68px] rounded-2xl flex items-center justify-center text-foreground hover:scale-110 bg-popover border border-border shadow-lg hover:bg-popover transition-all ease-out "
            style={{ transitionDuration: "var(--transition-duration)" }}
          >
            <PlusIcon className="size-7" />
          </button>
        </div>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
}

CreateButtonFixed.propTypes = {
  tooltipContent: PropTypes.string,
  handleCreate: PropTypes.func,
};
