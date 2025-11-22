import { User } from "lucide-react";

export default function UserIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return <User strokeWidth={strokeWidth} className={className} {...props} />;
}
