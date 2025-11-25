import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import {
  DEFAULT_MOTION_CONFIG,
  MOTION_DIRECTIONS,
} from "@/constants/motionConfig";
import { CreateThreadHeader } from "./CreateThreadHeader";
import { CreateThreadContent } from "./CreateThreadContent";
import { CreateThreadFooter } from "./CreateThreadFooter";

export const CreateCardFixed = ({ isModal = false, onClose }) => {
  // Handle ESC key for both modal and dropdown
  useEffect(() => {
    if (!onClose) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const cardContent = (
    <Card className="w-[90vw] md:max-w-[620px] shadow-none border-border bg-card flex flex-col p-0">
      <CreateThreadHeader onClose={onClose} />
      <CreateThreadContent />
      <CreateThreadFooter />
    </Card>
  );

  if (isModal) {
    return createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <MotionWrapper
          motionKey="create-modal"
          direction={MOTION_DIRECTIONS.SCALE_UP}
          duration={DEFAULT_MOTION_CONFIG.duration}
          ease="easeOut"
          mode="wait"
          initial={true}
          onClick={(e) => e.stopPropagation()}
        >
          {cardContent}
        </MotionWrapper>
      </div>,
      document.body
    );
  }

  return (
    <DropdownMenuContent
      className="p-0 rounded-2xl border-border bg-transparent shadow-lg mr-6 mb-2"
      align="end"
      side="top"
      sideOffset={8}
      onInteractOutside={(e) => e.preventDefault()}
      onEscapeKeyDown={onClose}
    >
      <MotionWrapper
        motionKey="create-dropdown"
        direction={MOTION_DIRECTIONS.BOTTOM_RIGHT_TO_TOP_LEFT}
        duration={0.2}
        ease="easeOut"
        mode="wait"
        initial={false}
      >
        {cardContent}
      </MotionWrapper>
    </DropdownMenuContent>
  );
};

CreateCardFixed.propTypes = {
  isModal: PropTypes.bool,
  onClose: PropTypes.func,
};
