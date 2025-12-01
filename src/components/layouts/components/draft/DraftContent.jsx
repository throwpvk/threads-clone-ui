import { CardContent } from "@/components/ui/card";
import { DraftItem } from "./DraftItem";
import clsx from "clsx";
import PropTypes from "prop-types";

const mockDrafts = [];

export const DraftContent = ({
  isMobile = false,
  isModal = false,
  drafts = null,
  onSelectDraft = null,
  onDeleteDraft = null,
}) => {
  const list = Array.isArray(drafts) && drafts.length ? drafts : mockDrafts;

  const handleDraftClick = (draft) => {
    if (onSelectDraft) onSelectDraft(draft);
  };

  return (
    <CardContent className={clsx("p-0", isMobile ? "flex-1" : "")}>
      <div className="overflow-y-auto max-h-[calc(90vh-56px)] min-h-30">
        {Array.isArray(list) && list.length > 0 ? (
          list.map((draft) => (
            <DraftItem
              key={draft.id}
              username={draft.username || "You"}
              time={
                draft.savedAt
                  ? new Date(draft.savedAt).toLocaleString()
                  : draft.time
              }
              content={draft.content}
              onClick={() => handleDraftClick(draft)}
              onDelete={() => onDeleteDraft && onDeleteDraft(draft.id)}
              isMobile={isMobile}
              isModal={isModal}
            />
          ))
        ) : (
          <div className="flex items-center justify-center p-6 text-sm text-slate-500">
            No drafts
          </div>
        )}
      </div>
    </CardContent>
  );
};

DraftContent.propTypes = {
  isMobile: PropTypes.bool,
  drafts: PropTypes.array,
  onSelectDraft: PropTypes.func,
  onDeleteDraft: PropTypes.func,
};
