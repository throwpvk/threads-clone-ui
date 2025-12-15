import AddColumnIcon from "@/components/icons/AddColumnIcon";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { AVAILABLE_COLUMN_TYPES, COLUMN_CONFIG } from "@/constants/columnTypes";

const AddColumnButton = ({
  tooltipContent = "Add column",
  onSelectColumnType = () => {},
}) => {
  return (
    <DropdownMenu modal={false}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="m-2 w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground/40 hover:text-foreground bg-muted/50 hover:bg-muted/50"
              aria-label="Add column"
            >
              <AddColumnIcon className="size-5" width={20} height={20} />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>

      <DropdownMenuContent
        side="right"
        align="start"
        className="w-56 p-1 rounded-2xl bg-popover border border-border shadow-lg"
      >
        {AVAILABLE_COLUMN_TYPES.map((type) => {
          const config = COLUMN_CONFIG[type];
          return (
            <DropdownMenuItem
              key={type}
              onSelect={() => onSelectColumnType(type)}
              className="cursor-pointer px-3 py-2.5 text-sm font-semibold rounded-xl hover:bg-accent focus:bg-accent"
            >
              {config.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

AddColumnButton.propTypes = {
  tooltipContent: PropTypes.string,
  onSelectColumnType: PropTypes.func,
};

export default AddColumnButton;
