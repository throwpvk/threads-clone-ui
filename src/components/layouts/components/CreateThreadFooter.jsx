import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OptionIcon } from "@/components/icons";

export const CreateThreadFooter = () => {
  return (
    <CardFooter className="border-0 border-border p-6!">
      <div className="flex items-center justify-between w-full">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <OptionIcon className="h-4 w-4 mr-2" />
          Reply options
        </Button>
        <button
          className="rounded-lg px-4 h-9 border border-border cursor-pointer bg-transparent text-muted-foreground hover:bg-transparent active:scale-95"
          disabled
        >
          Post
        </button>
      </div>
    </CardFooter>
  );
};
