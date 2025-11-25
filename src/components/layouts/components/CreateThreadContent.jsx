import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AddLocationIcon,
  AddPollIcon,
  AttachMediaIcon,
  AttachTextIcon,
  GifIcon,
  SmileIcon,
} from "@/components/icons";

export const CreateThreadContent = () => {
  return (
    <CardContent className="p-4">
      <div className="flex gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-muted shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-sm">pvkhaii</span>
            <span className="text-muted-foreground text-xs">›</span>
            <span className="text-muted-foreground text-xs">Add a topic</span>
          </div>

          <textarea
            placeholder="What's new?"
            className="w-full min-h-20 bg-transparent border-none outline-none resize-none text-sm placeholder:text-muted-foreground"
          />

          <p className="text-xs text-muted-foreground mb-3">AI info</p>

          {/* Icons toolbar */}
          <div className="flex items-center gap-1 mb-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <AttachMediaIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <GifIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <SmileIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <AddPollIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <AttachTextIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <AddLocationIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add to thread */}
      <div className="flex items-center gap-3 pl-12">
        <div className="w-6 h-6 rounded-full bg-muted shrink-0" />
        <span className="text-sm text-muted-foreground">Add to thread</span>
      </div>
    </CardContent>
  );
};
