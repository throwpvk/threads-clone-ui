import { CardContent } from "@/components/ui/card";
import { CreateThreadItem } from "./CreateThreadItem";
import avt from "@/assets/avt-placeholder.png";
import clsx from "clsx";
import { CreateThreadSchedule } from "./CreateThreadSchedule";
import PropTypes from "prop-types";
import { useCreateThread } from "./context/useCreateThread";

export const CreateThreadContent = ({ contentRef, onAddThread }) => {
  const { state, actions, isMobile } = useCreateThread();

  const lastThread = state.threads[state.threads.length - 1];
  const canAddThread =
    lastThread?.content && lastThread.content.trim().length > 0;

  return (
    <CardContent className={clsx("p-0", isMobile ? "flex-1" : "")}>
      {state.scheduleData && (
        <CreateThreadSchedule
          dateTime={state.scheduleData.dateTime}
          onClose={actions.handleRemoveSchedule}
          onClick={actions.handleClickSchedule}
        />
      )}
      <div ref={contentRef} className="overflow-y-auto px-6 pb-1 max-h-[80vh]">
        {state.threads.map((thread, index) => (
          <div key={thread.id}>
            <CreateThreadItem
              index={index}
              threadId={thread.id}
              totalThreads={state.threads.length}
              isFirst={index === 0}
              isActive={thread.id === state.activeThreadId}
              isAIInfo={thread.isAIInfo}
              content={thread.content || ""}
              showRemoveButton={index > 0}
              onRemove={() => actions.removeThread(thread.id)}
              onFocus={() => actions.setActiveThread(thread.id)}
              onContentChange={(content) =>
                actions.updateThreadContent(thread.id, content)
              }
            />
          </div>
        ))}

        <div className="flex gap-3 pt-2.5">
          <div className="w-9 flex justify-center items-center">
            <img
              src={avt}
              className={clsx(
                "w-4 h-4 rounded-full shrink-0 border border-border",
                canAddThread
                  ? "opacity-100 cursor-pointer"
                  : "opacity-50 cursor-default"
              )}
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
  contentRef: PropTypes.object,
  onAddThread: PropTypes.func,
};
