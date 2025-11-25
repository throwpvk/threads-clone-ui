import { CircleEllipsis } from "lucide-react";

export default function MoreIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return (
    <CircleEllipsis
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}
