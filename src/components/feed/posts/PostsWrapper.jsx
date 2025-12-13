import React from "react";

export default function PostsWrapper({ children, className = "" }) {
  return (
    <div className={`flex-1 overflow-y-auto scrollbar-custom ${className}`}>
      {children}
    </div>
  );
}
