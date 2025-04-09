import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";

const Layout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsMobileOpen(!isMobileOpen);

  return (
    <div className="min-h-screen flex flex-col bg-[#edf2f7]">
      <div className="h-[60px] w-full sticky top-0 bg-white z-50">
        <Header toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-1" style={{ height: "calc(100vh - 60px)" }}>
        <aside className="z-50">
          <Sidebar
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
        </aside>

        <main className="flex-1 overflow-auto bg-[#edf2f7]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
