import { useContext } from "react";
import { CreateThreadContext } from "./context";

export const useCreateThread = () => {
  const context = useContext(CreateThreadContext);

  if (!context) {
    throw new Error("useCreateThread must be used within CreateThreadProvider");
  }

  return context;
};
