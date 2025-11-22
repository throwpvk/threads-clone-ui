import { Plus } from "lucide-react";

export default function PlusIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return <Plus strokeWidth={strokeWidth} className={className} {...props} />;
}
