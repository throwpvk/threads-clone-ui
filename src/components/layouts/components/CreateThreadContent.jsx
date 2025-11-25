import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreateThreadItem } from "./CreateThreadItem";

export const CreateThreadContent = () => {
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
    <CardContent className="p-0">
      <div className="max-h-[60vh] overflow-y-auto px-6 pt-4 pb-1">
        {threads.map((thread, index) => (
          <div key={thread.id} className={index > 0 ? "mt-4" : ""}>
            <CreateThreadItem
              index={index}
              isFirst={index === 0}
              showRemoveButton={index > 0}
              onRemove={() => handleRemoveThread(thread.id)}
            />
          </div>
        ))}

        <div className="flex gap-3 mt-3">
          <div className="w-9 flex justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-muted shrink-0" />
          </div>
          <button
            className="justify-start h-auto py-1 px-0 hover:bg-transparent text-muted-foreground"
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
