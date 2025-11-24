import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { NavMenuItems } from "./NavMenuItems";
import { AppearanceMenuItems } from "./AppearanceMenuItems";
import { FeedMenuItems } from "./FeedMenuItems";
import clsx from "clsx";

export const MenuNavigator = () => {
  const [currentMenu, setCurrentMenu] = useState("nav");
  const [direction, setDirection] = useState("none");

  const handleNavigateToAppearance = () => {
    setDirection("forward");
    setCurrentMenu("appearance");
  };

  const handleNavigateToFeeds = () => {
    setDirection("forward");
    setCurrentMenu("feeds");
  };

  const handleBackToNav = () => {
    setDirection("backward");
    setCurrentMenu("nav");
  };

  const getVariants = () => {
    if (direction === "backward") {
      return {
        initial: { opacity: 0, x: -40, y: 40 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 40, y: -40 },
      };
    } else if (direction === "forward") {
      return {
        initial: { opacity: 0, x: 40, y: -40 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -40, y: 40 },
      };
    }
    return {
      initial: { opacity: 1, x: 0, y: 0 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: 0 },
    };
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
        setDirection("none");
      }}
    >
      <motion.div
        animate={{ width: currentMenu === "appearance" ? 314 : 240 }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentMenu}
            variants={getVariants()}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.15,
              ease: "easeInOut",
            }}
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
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </DropdownMenuContent>
  );
};
