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

  const handleNavigateToAppearance = () => {
    setCurrentMenu("appearance");
  };

  const handleNavigateToFeeds = () => {
    setCurrentMenu("feeds");
  };

  const handleBackToNav = () => {
    setCurrentMenu("nav");
  };

  return (
    <DropdownMenuContent
      className={clsx(
        "ml-4 mb-0 py-2 rounded-2xl bg-card border border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-0 data-[state=closed]:zoom-out-95 origin-bottom-left ease-out overflow-hidden",
        currentMenu === "nav" ? "py-2" : "py-0"
      )}
      style={{
        animationDuration: "var(--transition-duration)",
      }}
      align="end"
      onCloseAutoFocus={() => {
        setCurrentMenu("nav");
      }}
    >
      <motion.div
        animate={{ width: currentMenu === "appearance" ? 314 : 234 }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
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
