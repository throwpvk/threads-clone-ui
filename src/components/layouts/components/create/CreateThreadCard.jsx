import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect, useState, useRef, useCallback } from "react";
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
import CancelDialogContent from "../menu/CancelDialogContent";

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
  const [showScheduleMenu, setShowScheduleMenu] = useState(false);
  const [scheduleData, setScheduleData] = useState(null);
  const nextThreadId = useRef(1);
  const contentRef = useRef(null);

  const handleClose = useCallback(() => {
    setThreads([{ id: 0, isAIInfo: false, content: "" }]);
    setActiveThreadId(0);
    onClose();
  }, [onClose]);

  // Draft dialog + saving state
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);

  const DRAFT_KEY = "threads_create_draft_v1";
  const loadDraftsFromStorage = () => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      // support both single object and array
      if (Array.isArray(parsed)) return parsed;
      if (parsed && parsed.threads) {
        // older shape => convert to single draft entry
        const first = parsed.threads[0] || { content: "" };
        return [
          {
            id: Date.now(),
            content: first.content || "",
            scheduleData: parsed.scheduleData || null,
            savedAt: parsed.savedAt || new Date().toISOString(),
          },
        ];
      }
      return [];
    } catch (e) {
      console.warn("Failed to load draft from storage", e);
      return [];
    }
  };

  const saveDraftsToStorage = (drafts) => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
    } catch (e) {
      console.warn("Failed to save drafts to storage", e);
    }
  };

  const [draftsList, setDraftsList] = useState([]);

  // Handle ESC key
  useEffect(() => {
    if (!onClose) return;

    const handleEscape = (e) => {
      if (e.key === "Escape" && currentView === "create") {
        const first = threads && threads[0];
        const firstEmpty = !first.content || first.content.trim().length === 0;
        if (firstEmpty) {
          handleClose();
        } else {
          setShowCancelDialog(true);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [currentView, onClose, handleClose, threads]);

  // load draft when component mounts
  useEffect(() => {
    const drafts = loadDraftsFromStorage();
    if (drafts && drafts.length > 0) {
      // defer setState to avoid cascading render warning
      setTimeout(() => setDraftsList(drafts), 0);
      // do not auto-load into create view; user can open Draft tab to apply
    }
  }, []);

  const handleConfirmDiscard = () => {
    setShowCancelDialog(false);
    handleClose();
  };

  const handleConfirmSave = async () => {
    setSavingDraft(true);
    try {
      const first = threads && threads[0] ? threads[0] : { content: "" };
      const newDraft = {
        id: Date.now(),
        content: first.content || "",
        scheduleData: scheduleData || null,
        savedAt: new Date().toISOString(),
      };
      const next = [newDraft, ...draftsList];
      setDraftsList(next);
      saveDraftsToStorage(next);
    } catch (err) {
      console.warn(err);
    }
    setSavingDraft(false);
    setShowCancelDialog(false);
    handleClose();
  };

  // Try to close: if first thread is empty then close immediately, else open confirm dialog
  const attemptClose = useCallback(() => {
    const first = threads && threads[0];
    const firstEmpty = !first.content || first.content.trim().length === 0;

    if (firstEmpty) {
      handleClose();
    } else {
      setShowCancelDialog(true);
    }
  }, [threads, handleClose]);

  // When user selects a draft from DraftContent, load it into create view
  const handleSelectDraft = (draft) => {
    const thread = { id: 0, isAIInfo: false, content: draft.content || "" };
    setThreads([thread]);
    setActiveThreadId(0);
    setScheduleData(draft.scheduleData || null);
    setCurrentView("create");
  };

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
    // Tạo datetime string từ date và time
    const [hours, minutes] = time.split(":").slice(0, 2).map(Number);
    const scheduledDateTime = new Date(date);
    scheduledDateTime.setHours(hours, minutes, 0, 0);

    setScheduleData({
      dateTime: scheduledDateTime.toISOString(),
      date,
      time,
    });
    setShowScheduleMenu(false);
  };

  // Handle schedule close (click outside)
  const handleScheduleClose = () => {
    setShowScheduleMenu(false);
  };

  // Handle remove schedule
  const handleRemoveSchedule = () => {
    setScheduleData(null);
  };

  // Handle click schedule to edit
  const handleClickSchedule = () => {
    setShowScheduleMenu(true);
  };

  const handleOverlayClick = () => {
    if (currentView === "create") {
      attemptClose();
    }
  };

  const handleConfirmCancel = () => {
    setShowCancelDialog(false);
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
    <div
      className={clsx(
        "relative overflow-hidden",
        isModal && " min-h-150 flex items-center",
        !isModal && !isMobile && " min-h-150 flex items-end",
        cardWidth
      )}
    >
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
              onClose={attemptClose}
              isModal={isModal}
              isMobile={isMobile}
              onDraftClick={handleDraftClick}
              onToggleAILabel={handleToggleAILabel}
              onScheduleClick={() => setShowScheduleMenu(!showScheduleMenu)}
              hasAIInfo={hasAIInfo}
              showScheduleMenu={showScheduleMenu}
              onScheduleDone={handleScheduleDone}
              onScheduleClose={handleScheduleClose}
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
              hasSchedule={!!scheduleData}
              scheduleData={scheduleData}
              onRemoveSchedule={handleRemoveSchedule}
              onClickSchedule={handleClickSchedule}
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
              onClose={attemptClose}
              isModal={isModal}
              onBackClick={onBackClick}
            />
            <DraftContent
              isMobile={isMobile}
              drafts={draftsList}
              onSelectDraft={handleSelectDraft}
            />
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
        <CancelDialogContent
          open={showCancelDialog}
          onClose={handleConfirmCancel}
          onSave={handleConfirmSave}
          onDiscard={handleConfirmDiscard}
          saving={savingDraft}
        />
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
      onEscapeKeyDown={() => setShowCancelDialog(true)}
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
      <CancelDialogContent
        open={showCancelDialog}
        onClose={handleConfirmCancel}
        onSave={handleConfirmSave}
        onDiscard={handleConfirmDiscard}
        saving={savingDraft}
      />
    </DropdownMenuContent>
  );
};

CreateThreadCard.propTypes = {
  isModal: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
};
