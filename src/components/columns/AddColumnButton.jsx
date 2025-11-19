import { Columns } from "lucide-react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AddColumnButton = ({
  tooltipContent = "Add column",
  handleAddColumn = () => {},
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleAddColumn}
          className="w-12 h-12 rounded-full text-muted-foreground/60 hover:text-foreground hover:bg-muted/50"
          aria-label="Add column"
        >
          <Columns strokeWidth={2} className="size-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
};

AddColumnButton.propTypes = {
  tooltipContent: PropTypes.string,
  handleAddColumn: PropTypes.func,
};

export default AddColumnButton;
