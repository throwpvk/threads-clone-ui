import React from "react";

export default function Wrapper({ children, className = "" }) {
  return (
    <div className={`flex-1 overflow-y-auto scrollbar-custom ${className}`}>
      {children}
    </div>
  );
}
