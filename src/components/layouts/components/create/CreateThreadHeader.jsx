import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { DraftIcon, MoreIcon, XIcon } from "@/components/icons";
import { DropMenu } from "@/components/dropMenu";
import { MoreMenu, ScheduleMenu } from "@/components/layouts/components";
import clsx from "clsx";

export const CreateThreadHeader = ({
  onClose,
  isModal = false,
  isMobile = false,
  onDraftClick,
  onToggleAILabel,
  onScheduleClick,
  hasAIInfo = false,
  showScheduleMenu = false,
  onScheduleDone,
  onScheduleClose,
}) => {
  const scheduleMenuRef = useRef(null);
  const [menuTopOffset, setMenuTopOffset] = useState(0);

  useEffect(() => {
    if (!showScheduleMenu || isModal || isMobile) {
      return;
    }

    const calculatePosition = () => {
      if (!scheduleMenuRef.current) return;

      const menuElement = scheduleMenuRef.current;
      const cardElement = menuElement.closest(".drop-shadow-sm");

      if (!cardElement) return;

      const menuHeight = menuElement.offsetHeight;
      const cardHeight = cardElement.offsetHeight;
      const availableHeight = cardHeight;
      if (menuHeight > availableHeight) {
        const offset = menuHeight - availableHeight;
        setMenuTopOffset(-offset);
      } else {
        setMenuTopOffset(0);
      }
    };

    // Chờ DOM render xong
    const timer = setTimeout(() => {
      calculatePosition();
    }, 0);

    // Lắng nghe resize
    window.addEventListener("resize", calculatePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [showScheduleMenu, isModal, isMobile]);

  return (
    <CardHeader className="border-b border-border h-14 px-0 flex items-center justify-between relative overflow-visible">
      <div className="flex items-center justify-between flex-1 h-full mx-6">
        <button
          className="h-auto px-0 hover:bg-transparent cursor-pointer text-base font-normal"
          onClick={onClose}
        >
          {isModal ? "Cancel" : <XIcon className="size-5" />}
        </button>
        <CardTitle className="text-base font-semibold">New thread</CardTitle>
        <CardAction className="flex items-center gap-2 h-full">
          <button
            onClick={onDraftClick}
            className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end transition-transform duration-150"
          >
            <DraftIcon />
          </button>
          <DropMenu
            content={
              <MoreMenu
                isModal={isModal}
                isMobile={isMobile}
                hasAIInfo={hasAIInfo}
                onAIClick={onToggleAILabel}
                onScheduleClick={onScheduleClick}
              />
            }
          >
            <button className="h-8 w-8 rounded-full hover:bg-transparent cursor-pointer flex items-center justify-end transition-transform duration-150">
              <MoreIcon strokeWidth="2.2" />
            </button>
          </DropMenu>
        </CardAction>
      </div>

      {showScheduleMenu && (
        <div
          ref={scheduleMenuRef}
          className={clsx(
            "absolute z-50",
            isModal
              ? "top-[47px] right-4"
              : isMobile
                ? "top-[47px] right-4"
                : "right-0"
          )}
          style={
            !isModal && !isMobile ? { top: `${menuTopOffset}px` } : undefined
          }
        >
          <ScheduleMenu onDone={onScheduleDone} onClose={onScheduleClose} />
        </div>
      )}
    </CardHeader>
  );
};

CreateThreadHeader.propTypes = {
  onClose: PropTypes.func,
  isModal: PropTypes.bool,
  isMobile: PropTypes.bool,
  onDraftClick: PropTypes.func,
  onToggleAILabel: PropTypes.func,
  onScheduleClick: PropTypes.func,
  hasAIInfo: PropTypes.bool,
  showScheduleMenu: PropTypes.bool,
  onScheduleDone: PropTypes.func,
  onScheduleClose: PropTypes.func,
};
