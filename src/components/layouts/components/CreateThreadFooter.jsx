import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const CreateThreadFooter = () => {
  return (
    <CardFooter className="border-t border-border">
      <div className="flex items-center justify-between w-full">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Reply options
        </Button>
        <Button
          size="sm"
          className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90"
          disabled
        >
          Post
        </Button>
      </div>
    </CardFooter>
  );
};
