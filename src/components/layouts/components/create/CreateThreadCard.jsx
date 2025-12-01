import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useRef } from "react";
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
import { CreateThreadProvider } from "./context/CreateThreadContext";
import { useCreateThread } from "./context/useCreateThread";

const CreateThreadCardContent = () => {
  const { state, actions, isModal, isMobile } = useCreateThread();
  const contentRef = useRef(null);

  const handleOverlayClick = () => {
    if (state.currentView === "create") {
      actions.attemptClose();
    }
  };

  const handleAddThreadWithScroll = () => {
    actions.addThread();
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollTo({
          top: contentRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
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
            state.currentView === "create"
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
                      opacity: state.currentView === "create" ? 1 : 0,
                      transform:
                        state.currentView === "create"
                          ? "scaleY(1)"
                          : "scaleY(0.7)",
                      transition:
                        "opacity 200ms ease-out 100ms, transform 300ms ease-out",
                    }
                  : {
                      transform:
                        state.currentView === "create"
                          ? "scaleY(1)"
                          : "scaleY(0.7)",
                      transformOrigin: "bottom",
                      transition: "transform 300ms ease-out",
                    }
            }
          >
            <CreateThreadHeader />
            <CreateThreadContent
              contentRef={contentRef}
              onAddThread={handleAddThreadWithScroll}
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
                      opacity: state.currentView === "draft" ? 1 : 0,
                      transform:
                        state.currentView === "draft"
                          ? "scaleY(1)"
                          : "scaleY(0.7)",
                      transition:
                        "opacity 200ms ease-out 100ms, transform 300ms ease-out",
                    }
                  : {
                      transform:
                        state.currentView === "draft"
                          ? "scaleY(1)"
                          : "scaleY(0.7)",
                      transformOrigin: "bottom",
                      transition: "transform 300ms ease-out",
                    }
            }
          >
            <DraftHeader onBackClick={actions.handleBackFromDraft} />
            <DraftContent
              isModal={isModal}
              isMobile={isMobile}
              drafts={state.draftsList}
              onSelectDraft={actions.handleSelectDraft}
              onDeleteDraft={actions.handleDeleteDraft}
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
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
          open={state.showCancelDialog}
          onClose={actions.handleConfirmCancel}
          onSave={actions.handleConfirmSave}
          onDiscard={actions.handleConfirmDiscard}
          saving={state.savingDraft}
          saveLabel={state.editingDraftId ? "Update" : "Save"}
          title={state.editingDraftId ? "Update draft?" : "Save to drafts?"}
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
      onEscapeKeyDown={() => actions.setCancelDialog(true)}
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
        open={state.showCancelDialog}
        onClose={actions.handleConfirmCancel}
        onSave={actions.handleConfirmSave}
        onDiscard={actions.handleConfirmDiscard}
        saving={state.savingDraft}
        saveLabel={state.editingDraftId ? "Update" : "Save"}
        title={state.editingDraftId ? "Update draft?" : "Save to drafts?"}
      />
    </DropdownMenuContent>
  );
};

export const CreateThreadCard = ({
  isModal = false,
  isMobile = false,
  onClose,
}) => {
  return (
    <CreateThreadProvider
      isModal={isModal}
      isMobile={isMobile}
      onClose={onClose}
    >
      <CreateThreadCardContent />
    </CreateThreadProvider>
  );
};

CreateThreadCard.propTypes = {
  isModal: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
};
