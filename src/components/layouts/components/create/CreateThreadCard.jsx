import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
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
import { DraftHeader } from "../draft/DraftHeader";
import { DraftContent } from "../draft/DraftContent";

export const CreateThreadCard = ({
  isModal = false,
  isMobile = false,
  onClose,
}) => {
  const [currentView, setCurrentView] = useState("create"); // "create" or "draft"

  // Handle ESC key for both modal and dropdown
  useEffect(() => {
    if (!onClose) return;

    const handleEscape = (e) => {
      if (e.key === "Escape" && currentView === "create") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [currentView, onClose]);

  // Lock/unlock scroll when modal is open
  useEffect(() => {
    if (isModal || isMobile) {
      const scrollY = window.scrollY;
      document.body.classList.add("modal-lock-scroll");
      document.body.style.top = `-${scrollY}px`;

      return () => {
        document.body.classList.remove("modal-lock-scroll");
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModal, isMobile]);

  const handleDraftClick = () => {
    setCurrentView("draft");
  };

  const onBackClick = () => {
    setCurrentView("create");
  };

  const handleOverlayClick = () => {
    if (currentView === "create" && onClose) {
      onClose();
    }
  };

  const cardClassName = clsx(
    "drop-shadow-sm border-border bg-card flex flex-col p-0 w-full",
    isMobile ? "w-screen h-screen rounded-none" : "rounded-2xl",
    isModal && "max-h-[90vh] [&_.overflow-y-auto]:max-h-[calc(90vh-200px)]",
    !isModal &&
      !isMobile &&
      "max-h-[80vh] [&_.overflow-y-auto]:max-h-[calc(80vh-200px)]"
  );

  const cardWidth = isMobile ? "w-screen" : isModal ? "w-[644px]" : "w-[518px]";

  const slideContent = (
    <div className={clsx("relative overflow-hidden", cardWidth)}>
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{
          width: isMobile ? "200vw" : isModal ? "1288px" : "1036px",
          transform:
            currentView === "create"
              ? "translateX(0)"
              : isMobile
                ? "translateX(-100vw)"
                : isModal
                  ? "translateX(-644px)"
                  : "translateX(-518px)",
        }}
      >
        <div
          className={clsx(
            "flex justify-center",
            isMobile || "p-2",
            isModal ? "items-center" : "items-end",
            cardWidth
          )}
        >
          <Card
            className={cardClassName}
            style={
              isMobile
                ? undefined
                : isModal
                  ? {
                      opacity: currentView === "create" ? 1 : 0,
                      transform:
                        currentView === "create" ? "scaleY(1)" : "scaleY(0.7)",
                      transition:
                        "opacity 200ms ease-out 100ms, transform 300ms ease-out",
                    }
                  : {
                      transform:
                        currentView === "create" ? "scaleY(1)" : "scaleY(0.7)",
                      transformOrigin: "bottom",
                      transition: "transform 300ms ease-out",
                    }
            }
          >
            <CreateThreadHeader
              onClose={onClose}
              isModal={isModal}
              isMobile={isMobile}
              onDraftClick={handleDraftClick}
            />
            <CreateThreadContent isMobile={isMobile} />
            <CreateThreadFooter />
          </Card>
        </div>

        <div
          className={clsx(
            "flex justify-center",
            isMobile || "p-2",
            isModal ? "items-center" : "items-end",
            cardWidth
          )}
        >
          <Card
            className={cardClassName}
            style={
              isMobile
                ? undefined
                : isModal
                  ? {
                      opacity: currentView === "draft" ? 1 : 0,
                      transform:
                        currentView === "draft" ? "scaleY(1)" : "scaleY(0.7)",
                      transition:
                        "opacity 200ms ease-out 100ms, transform 300ms ease-out",
                    }
                  : {
                      transform:
                        currentView === "draft" ? "scaleY(1)" : "scaleY(0.7)",
                      transformOrigin: "bottom",
                      transition: "transform 300ms ease-out",
                    }
            }
          >
            <DraftHeader
              onClose={onClose}
              isModal={isModal}
              onBackClick={onBackClick}
            />
            <DraftContent isMobile={isMobile} />
          </Card>
        </div>
      </div>
    </div>
  );

  if (isMobile || isModal) {
    const motionDirection = isMobile
      ? MOTION_DIRECTIONS.BOTTOM_TO_TOP
      : MOTION_DIRECTIONS.SCALE_UP;

    return createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80"
        onClick={handleOverlayClick}
      >
        <MotionWrapper
          motionKey="create-modal"
          direction={motionDirection}
          duration={DEFAULT_MOTION_CONFIG.duration}
          ease={DEFAULT_MOTION_CONFIG.ease}
          mode="wait"
          initial={true}
          onClick={(e) => e.stopPropagation()}
        >
          {slideContent}
        </MotionWrapper>
      </div>,
      document.body
    );
  }

  return (
    <DropdownMenuContent
      className="p-0 rounded-2xl border-0 border-border bg-transparent shadow-none -mr-2 -mb-21"
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
        {slideContent}
      </MotionWrapper>
    </DropdownMenuContent>
  );
};

CreateThreadCard.propTypes = {
  isModal: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
};
