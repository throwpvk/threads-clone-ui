import { useState } from "react";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { NavMenuItems } from "./NavMenuItems";
import { AppearanceMenuItems } from "./AppearanceMenuItems";
import { FeedMenuItems } from "./FeedMenuItems";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { MOTION_DIRECTIONS, MOTION_PRESETS } from "@/constants/motionConfig";
import { useIsMobile } from "@/hooks/use-mobile";
import clsx from "clsx";

export const MenuNavigator = () => {
  const [currentMenu, setCurrentMenu] = useState("nav");
  const [isForward, setIsForward] = useState(true);
  const isMobile = useIsMobile();

  const handleNavigateToAppearance = () => {
    setIsForward(true);
    setCurrentMenu("appearance");
  };

  const handleNavigateToFeeds = () => {
    setIsForward(true);
    setCurrentMenu("feeds");
  };

  const handleBackToNav = () => {
    setIsForward(false);
    setCurrentMenu("nav");
  };

  const getMotionDirection = () => {
    if (isMobile) {
      return isForward
        ? MOTION_DIRECTIONS.RIGHT_TO_LEFT
        : MOTION_DIRECTIONS.LEFT_TO_RIGHT;
    } else {
      return isForward
        ? MOTION_DIRECTIONS.BOTTOM_LEFT_TO_TOP_RIGHT
        : MOTION_DIRECTIONS.TOP_RIGHT_TO_BOTTOM_LEFT;
    }
  };

  return (
    <DropdownMenuContent
      className={clsx(
        "ml-4 mb-0 py-2 px-0 rounded-2xl bg-ring border border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-0 data-[state=closed]:zoom-out-95 origin-bottom-left ease-out overflow-hidden",
        currentMenu === "nav" ? "py-2" : "py-0"
      )}
      style={{
        animationDuration: "var(--transition-duration)",
      }}
      align="end"
      onCloseAutoFocus={() => {
        setCurrentMenu("nav");
        setIsForward(true);
      }}
    >
      <MotionWrapper
        motionKey={currentMenu}
        direction={getMotionDirection()}
        duration={0.15}
        ease="easeInOut"
        mode="wait"
        initial={false}
        wrapperAnimate={{ width: currentMenu === "appearance" ? 314 : 240 }}
        wrapperTransition={{ duration: 0.1, ease: "easeInOut" }}
      >
        {currentMenu === "appearance" ? (
          <AppearanceMenuItems onBack={handleBackToNav} />
        ) : currentMenu === "feeds" ? (
          <FeedMenuItems onBack={handleBackToNav} />
        ) : (
          <NavMenuItems
            onNavigateToAppearance={handleNavigateToAppearance}
            onNavigateToFeeds={handleNavigateToFeeds}
          />
        )}
      </MotionWrapper>
    </DropdownMenuContent>
  );
};
