import { CardContent } from "@/components/ui/card";
import { DraftItem } from "./DraftItem";
import clsx from "clsx";

// Mock draft data
const mockDrafts = [
  {
    id: 1,
    username: "pvkhaii",
    time: "16m",
    content: `sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
XSssssssssssssssssssssss
XSssssssssssssssssssssss
xssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
XSssssssssssssssssssssss
XSssssssssssssssssssssss
xssssssssssssssssssssssss`,
  },
  {
    id: 2,
    username: "pvkhaii",
    time: "16m",
    content: `sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
XSssssssssssssssssssssss
XSssssssssssssssssssssss
xssssssssssssssssssssssss`,
  },
  {
    id: 3,
    username: "pvkhaii",
    time: "16m",
    content: `sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
XSssssssssssssssssssssss
XSssssssssssssssssssssss
xssssssssssssssssssssssss`,
  },
];

export const DraftContent = ({ isMobile = false }) => {
  const handleDraftClick = (draftId) => {
    console.log("Draft clicked:", draftId);
    // TODO: Load draft and switch back to create thread view
  };

  return (
    <CardContent className={clsx("p-0", isMobile ? "flex-1" : "")}>
      <div className="overflow-y-auto max-h-[calc(90vh-56px)]">
        {mockDrafts.map((draft) => (
          <DraftItem
            key={draft.id}
            username={draft.username}
            time={draft.time}
            content={draft.content}
            onClick={() => handleDraftClick(draft.id)}
          />
        ))}
      </div>
    </CardContent>
  );
};
