import PropTypes from "prop-types";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { MoveLeft } from "lucide-react";

export const DraftHeader = ({ onBackClick }) => {
  return (
    <CardHeader className="border-b border-border h-14 px-6 flex items-center justify-between">
      <button
        className="h-full w-20 px-0 hover:bg-transparent cursor-pointer text-base font-normal"
        onClick={onBackClick}
      >
        <MoveLeft className="size-7 mx-auto" />
      </button>
      <CardTitle className="text-base font-semibold">Drafts</CardTitle>
      <div className="h-full w-20"></div>
    </CardHeader>
  );
};

DraftHeader.propTypes = {
  onClose: PropTypes.func,
  onBack: PropTypes.func,
};
