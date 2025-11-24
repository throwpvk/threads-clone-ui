import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Smile, AlignLeft, List, MapPin, Copy } from "lucide-react";

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
              <Image className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <Copy className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <Smile className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <AlignLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-accent"
            >
              <MapPin className="h-5 w-5" />
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
