import PropTypes from "prop-types";
import { CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { DraftIcon, MoreIcon, XIcon } from "@/components/icons";
import { DropMenu, CreateThreadMoreMenu } from "@/components/dropMenuContent";

export const CreateThreadHeader = ({
  onClose,
  isModal = false,
  isMobile = false,
  onDraftClick,
}) => {
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
          <button
            onClick={onDraftClick}
            className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end"
          >
            <DraftIcon />
          </button>
          <DropMenu
            content={
              <CreateThreadMoreMenu isModal={isModal} isMobile={isMobile} />
            }
          >
            <button className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end">
              <MoreIcon />
            </button>
          </DropMenu>
        </CardAction>
      </div>
    </CardHeader>
  );
};

CreateThreadHeader.propTypes = {
  onClose: PropTypes.func,
};
