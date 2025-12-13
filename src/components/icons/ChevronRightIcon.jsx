import clsx from "clsx";
import { ChevronRight } from "lucide-react";

export default function ChevronRightIcon({
  className = "",
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <ChevronRight
      strokeWidth={strokeWidth}
      className={clsx("size-4 text-muted-foreground", className)}
      {...props}
    />
  );
}
