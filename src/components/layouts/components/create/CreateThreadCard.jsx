import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";
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
import { ScheduleMenu } from "../menu/ScheduleMenu";

export const CreateThreadCard = ({
  isModal = false,
  isMobile = false,
  onClose,
}) => {
  const [currentView, setCurrentView] = useState("create"); // "create" or "draft"
  const [threads, setThreads] = useState([
    { id: 0, isAIInfo: false, content: "" },
  ]);
  const [activeThreadId, setActiveThreadId] = useState(0);
  const [showScheduleMenu, setShowScheduleMenu] = useState(true); // Control ScheduleMenu visibility
  const nextThreadId = useRef(1); // Track next thread id
  const contentRef = useRef(null);

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

  // Toggle AI label cho active thread
  const handleToggleAILabel = () => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === activeThreadId
          ? { ...thread, isAIInfo: !thread.isAIInfo }
          : thread
      )
    );
  };

  // Thêm thread mới
  const handleAddThread = () => {
    const newThread = {
      id: nextThreadId.current,
      isAIInfo: false,
      content: "",
    };
    nextThreadId.current += 1; // Increment for next thread
    setThreads([...threads, newThread]);
    setActiveThreadId(newThread.id);

    // Scroll to bottom smoothly
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollTo({
          top: contentRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Xóa thread
  const handleRemoveThread = (threadId) => {
    if (threads.length > 1) {
      const newThreads = threads.filter((thread) => thread.id !== threadId);
      setThreads(newThreads);
      // Nếu thread bị xóa là active thread, chuyển active sang thread đầu tiên
      if (threadId === activeThreadId && newThreads.length > 0) {
        setActiveThreadId(newThreads[0].id);
      }
    }
  };

  // Cập nhật content của thread
  const handleThreadContentChange = (threadId, content) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === threadId ? { ...thread, content } : thread
      )
    );
  };

  // Kiểm tra xem có thread nào có AI label không
  const hasAIInfo = threads.some((t) => t.isAIInfo);

  // Handle schedule done
  const handleScheduleDone = ({ date, time }) => {
    console.log("Scheduled:", date, time);
    setShowScheduleMenu(false);
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
      {/* ScheduleMenu - Absolute positioned at top-right */}
      {showScheduleMenu && (
        <div className="absolute top-16 right-0 z-50">
          <ScheduleMenu onDone={handleScheduleDone} />
        </div>
      )}

      {/* Main sliding content */}
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
              onToggleAILabel={handleToggleAILabel}
              hasAIInfo={hasAIInfo}
            />
            <CreateThreadContent
              isMobile={isMobile}
              threads={threads}
              activeThreadId={activeThreadId}
              onAddThread={handleAddThread}
              onRemoveThread={handleRemoveThread}
              onThreadFocus={setActiveThreadId}
              onThreadContentChange={handleThreadContentChange}
              contentRef={contentRef}
            />
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
