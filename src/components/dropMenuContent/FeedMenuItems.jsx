import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft } from "lucide-react";

export const FeedMenuItems = ({ onBack }) => {
  return (
    <>
      <DropdownMenuLabel className="p-0 mb-3 text-base font-semibold flex justify-between items-center">
        <button
          className="cursor-pointer h-12 w-12 flex items-center justify-center hover:bg-transparent rounded-lg transition-colors"
          onClick={onBack}
        >
          <ArrowLeft />
        </button>
        <span className="flex items-center justify-start">Feeds</span>
        <div className="h-12 w-12"></div>
      </DropdownMenuLabel>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Insights
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Insights
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Insights
      </DropdownMenuItem>
    </>
  );
};
