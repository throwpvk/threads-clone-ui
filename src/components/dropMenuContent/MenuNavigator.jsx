import { useState } from "react";
import { NavMenuContent } from "./NavMenu";
import { AppearanceMenu } from "./AppearanceMenu";

export const MenuNavigator = () => {
  const [currentMenu, setCurrentMenu] = useState("nav");

  const handleNavigateToAppearance = () => {
    setCurrentMenu("appearance");
  };

  const handleBackToNav = () => {
    setCurrentMenu("nav");
  };

  if (currentMenu === "appearance") {
    return <AppearanceMenu onBack={handleBackToNav} />;
  }

  return <NavMenuContent onNavigateToAppearance={handleNavigateToAppearance} />;
};
