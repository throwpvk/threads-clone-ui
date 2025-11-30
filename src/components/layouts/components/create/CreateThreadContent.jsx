import { CardContent } from "@/components/ui/card";
import { CreateThreadItem } from "./CreateThreadItem";
import avt from "@/assets/avt-placeholder.png";
import clsx from "clsx";
import { CreateThreadSchedule } from "./CreateThreadSchedule";
import PropTypes from "prop-types";

export const CreateThreadContent = ({
  isMobile = false,
  hasSchedule = true,
  threads,
  activeThreadId,
  onAddThread,
  onRemoveThread,
  onThreadFocus,
  onThreadContentChange,
  contentRef,
}) => {
  // Kiểm tra xem thread cuối cùng có content không
  const lastThread = threads[threads.length - 1];
  const canAddThread =
    lastThread?.content && lastThread.content.trim().length > 0;

  return (
    <CardContent className={clsx("p-0", isMobile ? "flex-1" : "")}>
      {hasSchedule && <CreateThreadSchedule />}
      <div ref={contentRef} className="overflow-y-auto px-6 pb-1 max-h-[80vh]">
        {threads.map((thread, index) => (
          <div key={thread.id}>
            <CreateThreadItem
              index={index}
              threadId={thread.id}
              totalThreads={threads.length}
              isFirst={index === 0}
              isActive={thread.id === activeThreadId}
              isAIInfo={thread.isAIInfo}
              content={thread.content || ""}
              showRemoveButton={index > 0}
              onRemove={() => onRemoveThread(thread.id)}
              onFocus={() => onThreadFocus(thread.id)}
              onContentChange={(content) =>
                onThreadContentChange(thread.id, content)
              }
            />
          </div>
        ))}

        <div className="flex gap-3 pt-2.5">
          <div className="w-9 flex justify-center items-center">
            <img
              src={avt}
              className="w-4 h-4 rounded-full shrink-0 border border-border"
              alt="Avatar"
            />
          </div>
          <button
            className={clsx(
              "justify-start h-auto py-0 px-0 hover:bg-transparent text-sm",
              canAddThread
                ? "text-muted-foreground cursor-pointer"
                : "text-muted-foreground/50 cursor-default"
            )}
            onClick={canAddThread ? onAddThread : undefined}
            disabled={!canAddThread}
          >
            <span className="hover:bg-transparent">Add to thread</span>
          </button>
        </div>
      </div>
    </CardContent>
  );
};

CreateThreadContent.propTypes = {
  isMobile: PropTypes.bool,
  hasSchedule: PropTypes.bool,
  threads: PropTypes.array.isRequired,
  activeThreadId: PropTypes.number.isRequired,
  onAddThread: PropTypes.func.isRequired,
  onRemoveThread: PropTypes.func.isRequired,
  onThreadFocus: PropTypes.func.isRequired,
  onThreadContentChange: PropTypes.func.isRequired,
  contentRef: PropTypes.object,
};
