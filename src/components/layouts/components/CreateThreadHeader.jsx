import PropTypes from "prop-types";
import { CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DraftIcon, MoreIcon } from "@/components/icons";

export const CreateThreadHeader = ({ onClose }) => {
  return (
    <CardHeader className="border-b border-border">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="h-auto px-0 hover:bg-transparent text-base font-normal"
          onClick={onClose}
        >
          Cancel
        </Button>
        <CardTitle className="text-base font-semibold">New thread</CardTitle>
        <CardAction className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-accent"
          >
            <DraftIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-accent"
          >
            <MoreIcon className="h-5 w-5" />
          </Button>
        </CardAction>
      </div>
    </CardHeader>
  );
};

CreateThreadHeader.propTypes = {
  onClose: PropTypes.func,
};
