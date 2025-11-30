import PropTypes from "prop-types";
import { CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { DraftIcon, MoreIcon, XIcon } from "@/components/icons";
import { DropMenu } from "@/components/dropMenuContent";
import { CreateThreadMoreMenu } from "@/components/layouts/components";

export const CreateThreadHeader = ({
  onClose,
  isModal = false,
  isMobile = false,
  onDraftClick,
  onToggleAILabel,
  hasAIInfo = false,
}) => {
  return (
    <CardHeader className="border-b border-border h-14 px-0 flex items-center justify-between">
      <div className="flex items-center justify-between flex-1 h-full mx-6">
        <button
          className="h-auto px-0 hover:bg-transparent cursor-pointer text-base font-normal"
          onClick={onClose}
        >
          {isModal ? "Cancel" : <XIcon className="size-5" />}
        </button>
        <CardTitle className="text-base font-semibold">New thread</CardTitle>
        <CardAction className="flex items-center gap-2 h-full">
          <button
            onClick={onDraftClick}
            className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end transition-transform duration-150"
          >
            <DraftIcon />
          </button>
          <DropMenu
            content={
              <CreateThreadMoreMenu
                isModal={isModal}
                isMobile={isMobile}
                hasAIInfo={hasAIInfo}
                onAIClick={onToggleAILabel}
              />
            }
          >
            <button className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end transition-transform duration-150">
              <MoreIcon strokeWidth="2.2" />
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
