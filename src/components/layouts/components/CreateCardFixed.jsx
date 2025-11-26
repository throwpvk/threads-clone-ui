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
import clsx from "clsx";

export const CreateCardFixed = ({
  isModal = false,
  isMobile = false,
  onClose,
}) => {
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

  // Lock/unlock scroll when modal is open
  useEffect(() => {
    if (isModal || isMobile) {
      const scrollY = window.scrollY;
      document.body.classList.add("lock-scroll");
      document.body.style.top = `-${scrollY}px`;

      return () => {
        document.body.classList.remove("lock-scroll");
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModal, isMobile]);

  const cardContent = (
    <Card
      className={clsx(
        "shadow-none border-border bg-card flex flex-col p-0",
        isModal ? "md:w-[620px]" : "md:w-[494px]",
        isMobile ? "w-screen h-screen rounded-none" : "rounded-2xl",
        !isModal &&
          !isMobile &&
          "max-h-[80vh] [&_.overflow-y-auto]:max-h-[56vh]"
      )}
    >
      <CreateThreadHeader onClose={onClose} isModal={isModal} />
      <CreateThreadContent isMobile={isMobile} />
      <CreateThreadFooter />
    </Card>
  );

  if (isMobile) {
    return createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <MotionWrapper
          motionKey="create-modal"
          direction={MOTION_DIRECTIONS.BOTTOM_TO_TOP}
          duration={DEFAULT_MOTION_CONFIG.duration}
          ease={DEFAULT_MOTION_CONFIG.ease}
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
          ease={DEFAULT_MOTION_CONFIG.ease}
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
      className="p-0 rounded-2xl border-border bg-transparent shadow-lg mr-0 -mb-19"
      align="end"
      side="top"
      sideOffset={8}
      onInteractOutside={(e) => e.preventDefault()}
      onEscapeKeyDown={onClose}
    >
      <MotionWrapper
        motionKey="create-dropdown"
        direction={MOTION_DIRECTIONS.BOTTOM_RIGHT_TO_TOP_LEFT}
        duration={DEFAULT_MOTION_CONFIG.duration}
        ease={1}
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
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
};
