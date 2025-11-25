import { Heart } from "lucide-react";

export default function HeartIcon({
  className = "",
  solid = false,
  width = 24,
  height = 24,
  ...props
}) {
  return (
    <Heart
      width={width}
      height={height}
      fill={solid ? "currentColor" : "none"}
      className={className}
      {...props}
    />
  );
}
