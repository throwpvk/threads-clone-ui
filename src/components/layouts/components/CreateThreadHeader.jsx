import PropTypes from "prop-types";
import { CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XIcon } from "@/components/icons";
import { Copy, Smile } from "lucide-react";

export const CreateThreadHeader = ({ onClose }) => {
  return (
    <CardHeader className="border-b border-border">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full hover:bg-accent"
          onClick={onClose}
        >
          <XIcon className="h-5 w-5" />
        </Button>
        <CardTitle className="text-base font-semibold">New thread</CardTitle>
        <CardAction className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-accent"
          >
            <Copy className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-accent"
          >
            <Smile className="h-5 w-5" />
          </Button>
        </CardAction>
      </div>
    </CardHeader>
  );
};

CreateThreadHeader.propTypes = {
  onClose: PropTypes.func,
};
