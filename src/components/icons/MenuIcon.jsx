import { Menu } from "lucide-react";

export default function MenuIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return <Menu strokeWidth={strokeWidth} className={className} {...props} />;
}
