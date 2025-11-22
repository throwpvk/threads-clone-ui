import { Search } from "lucide-react";

export default function SearchIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return <Search strokeWidth={strokeWidth} className={className} {...props} />;
}
