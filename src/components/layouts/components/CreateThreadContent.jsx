import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { CreateThreadItem } from "./CreateThreadItem";
import avt from "@/assets/avt-placeholder.png";
import clsx from "clsx";

export const CreateThreadContent = ({ isMobile = false }) => {
  // eslint-disable-next-line react-hooks/purity
  const [threads, setThreads] = useState([{ id: Date.now() }]);

  const handleAddThread = () => {
    setThreads([...threads, { id: Date.now() }]);
  };

  const handleRemoveThread = (threadId) => {
    if (threads.length > 1) {
      setThreads(threads.filter((thread) => thread.id !== threadId));
    }
  };

  return (
    <CardContent className={clsx("p-0", isMobile ? "flex-1" : "max-h-[60vh]")}>
      <div className="overflow-y-auto px-6 pt-4 pb-1">
        {threads.map((thread, index) => (
          <div key={thread.id} className={index > 0 ? "mt-4" : ""}>
            <CreateThreadItem
              index={index}
              totalThreads={threads.length}
              isFirst={index === 0}
              showRemoveButton={index > 0}
              onRemove={() => handleRemoveThread(thread.id)}
            />
          </div>
        ))}

        <div className="flex gap-3 pt-2.5">
          <div className="w-9 flex justify-center items-center">
            <img
              src={avt}
              className="w-4 h-4 rounded-full shrink-0"
              alt="Avatar"
            />
          </div>
          <button
            className="justify-start h-auto py-0 px-0 hover:bg-transparent text-muted-foreground"
            onClick={handleAddThread}
          >
            <span className="hover:bg-transparent text-muted-foreground cursor-pointer text-sm">
              Add to thread
            </span>
          </button>
        </div>
      </div>
    </CardContent>
  );
};
