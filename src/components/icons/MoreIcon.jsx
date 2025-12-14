import { CircleEllipsis, Ellipsis } from "lucide-react";

export default function MoreIcon({
  className = "",
  strokeWidth = 2.5,
  hasCircle = true,
  ...props
}) {
  return hasCircle ? (
    <CircleEllipsis
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  ) : (
    <Ellipsis strokeWidth={strokeWidth} className={className} {...props} />
  );
}
