import { Heart } from "lucide-react";

export default function HeartIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return <Heart strokeWidth={strokeWidth} className={className} {...props} />;
}
