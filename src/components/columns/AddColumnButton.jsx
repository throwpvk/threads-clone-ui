import AddColumnIcon from "@/components/icons/AddColumnIcon";
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
          className="m-2 w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground/40 hover:text-foreground bg-muted/50 over:bg-muted/50"
          aria-label="Add column"
        >
          <AddColumnIcon className="size-5" width={20} height={20} />
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
