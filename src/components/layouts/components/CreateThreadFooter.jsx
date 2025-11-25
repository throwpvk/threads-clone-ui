import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OptionIcon } from "@/components/icons";

export const CreateThreadFooter = () => {
  return (
    <CardFooter className="border-0 border-border p-6!">
      <div className="flex items-center justify-between w-full">
        <button className="bg-transparent text-muted-foreground/70 cursor-pointer hover:bg-transparent flex items-center justify-center">
          <OptionIcon className="mr-2" />
          Reply options
        </button>
        <button
          className="rounded-lg px-4 h-9 border border-border cursor-pointer bg-transparent text-muted-foreground/70 hover:bg-transparent font-semibold active:scale-95"
          disabled
        >
          Post
        </button>
      </div>
    </CardFooter>
  );
};
