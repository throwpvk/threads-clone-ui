import { ChevronDown } from "lucide-react";

export default function ChevronDownIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return (
    <ChevronDown strokeWidth={strokeWidth} className={className} {...props} />
  );
}
