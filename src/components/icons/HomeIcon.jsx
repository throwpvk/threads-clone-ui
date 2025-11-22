import { Home } from "lucide-react";

export default function HomeIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return <Home strokeWidth={strokeWidth} className={className} {...props} />;
}
