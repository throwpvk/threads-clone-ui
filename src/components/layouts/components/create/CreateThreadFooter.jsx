import { CardFooter } from "@/components/ui/card";
import { OptionIcon } from "@/components/icons";
import { useCreateThread } from "./context/useCreateThread";
import clsx from "clsx";
import { ClockIcon } from "lucide-react";

export const CreateThreadFooter = () => {
  const { state } = useCreateThread();
  const canPost = state.threads.some(
    (t) => t.content && t.content.trim().length > 0
  );
  return (
    <CardFooter className="border-0 border-border p-6!">
      <div className="flex items-center justify-between w-full">
        <button className="bg-transparent text-muted-foreground/70 cursor-pointer hover:bg-transparent flex items-center justify-center">
          <OptionIcon className="mr-2" />
          Reply options
        </button>
        <button
          className={clsx(
            "rounded-lg px-4 h-9 border border-border cursor-pointer bg-transparent hover:bg-transparent font-semibold active:scale-95",
            canPost ? "text-foreground" : "text-muted-foreground/70"
          )}
          disabled={!canPost}
          onClick={() =>
            console.log(`${state.scheduleData ? "Schedule" : "Post"} Clicked`)
          }
        >
          {state.scheduleData ? (
            <div className="flex items-center">
              <ClockIcon className="mr-1.5 size-4.5" />
              Schedule
            </div>
          ) : (
            "Post"
          )}
        </button>
      </div>
    </CardFooter>
  );
};
