import React from "react";
import { Outlet } from "react-router-dom";

export default function NoLayout() {
  return (
    <div>
      <h1>No Layout</h1>
      <Outlet />
    </div>
  );
}
