import PropTypes from "prop-types";
import ConfirmDialog from "./ConfirmDialog";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

// Nội dung dialog xác nhận khi cancel CreateThreadCard
export const CancelDialogContent = ({
  open = false,
  onClose = () => {},
  onSave = () => {},
  onDiscard = () => {},
  saving = false,
}) => {
  const content = (
    <div className="w-full flex flex-col gap-0">
      <div className="text-center px-6 pt-0 pb-5">
        <p className="text-sm text-muted-foreground">
          Save to drafts to edit and post at a later time.
        </p>
      </div>
      <button
        className="w-full font-semibold py-3.5 cursor-pointer border-t border-border"
        onClick={() => {
          onSave();
        }}
        disabled={saving}
      >
        {saving ? "Saving..." : "Save"}
      </button>

      <button
        className={clsx(
          "w-full text-red-500 font-semibold py-3.5 cursor-pointer border-t border-border",
          "hover:bg-transparent"
        )}
        onClick={() => onDiscard()}
      >
        Don't save
      </button>

      <button
        className="w-full text-muted-foreground py-3.5 cursor-pointer border-t border-border"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );

  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      title="Save to drafts?"
      ariaLabel="Save to drafts dialog"
      width="w-70"
    >
      {content}
    </ConfirmDialog>
  );
};

CancelDialogContent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onDiscard: PropTypes.func,
  saving: PropTypes.bool,
};

export default CancelDialogContent;
