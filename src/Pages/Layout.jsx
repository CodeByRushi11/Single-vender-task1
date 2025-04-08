import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";

const Layout = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#edf2f7" }}
    >
      {/* Header with fixed height */}
      <div
        className="h-[60px] w-full sticky top-0"
        style={{ backgroundColor: "white" }}
      >
        <Header />
      </div>

      {/* Main content area with Sidebar + Page content */}
      <div
        className="flex flex-1"
        style={{ height: "calc(100vh - 60px)", backgroundColor: "#edf2f7" }}
      >
        {/* Sidebar with background */}
        <aside
          className="w-64"
          style={{ backgroundColor: "#edf2f7", height: "calc(100vh - 60px)" }}
        >
          <Sidebar />
        </aside>

        {/* Main content area */}
        <main
          className="flex-1 p-4 overflow-auto"
          style={{ backgroundColor: "#edf2f7", height: "calc(100vh - 60px)" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
