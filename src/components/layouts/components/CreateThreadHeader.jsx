import PropTypes from "prop-types";
import { CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DraftIcon, MoreIcon, XIcon } from "@/components/icons";

export const CreateThreadHeader = ({ onClose, isModal = true }) => {
  return (
    <CardHeader className="border-b border-border h-14 px-6! flex items-center justify-between">
      <div className="flex items-center justify-between flex-1">
        <button
          className="h-auto px-0 hover:bg-transparent cursor-pointer text-base font-normal"
          onClick={onClose}
        >
          {isModal ? "Cancel" : <XIcon className="size-5" />}
        </button>
        <CardTitle className="text-base font-semibold">New thread</CardTitle>
        <CardAction className="flex items-center gap-2">
          <button className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end">
            <DraftIcon />
          </button>
          <button className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end">
            <MoreIcon />
          </button>
        </CardAction>
      </div>
    </CardHeader>
  );
};

CreateThreadHeader.propTypes = {
  onClose: PropTypes.func,
};
