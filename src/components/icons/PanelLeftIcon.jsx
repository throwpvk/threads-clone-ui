import { PanelLeft } from "lucide-react";

export default function PanelLeftIcon({
  className = "",
  strokeWidth = 2.5,
  ...props
}) {
  return (
    <PanelLeft strokeWidth={strokeWidth} className={className} {...props} />
  );
}
