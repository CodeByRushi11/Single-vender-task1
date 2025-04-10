import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";

const Layout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const toggleSidebar = () => setIsMobileOpen(!isMobileOpen);

  return (
    <div className="relative min-h-screen bg-[#edf2f7]">
      {/* Content Wrapper with blur when modal is open */}
      <div
        className={`flex flex-col ${
          isSignOutModalOpen ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Header */}
        <div className="h-[60px] w-full sticky top-0 bg-white z-50">
          <Header
            toggleSidebar={toggleSidebar}
            setIsSignOutModalOpen={setIsSignOutModalOpen}
          />
        </div>

        {/* Sidebar + Main Content */}
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

      {/* Sign Out Modal */}
      {isSignOutModalOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Are you sure you want to sign out?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setIsSignOutModalOpen(false)}
              >
                Cancel
              </button>
              <a
                href="/"
                onClick={() => setIsSignOutModalOpen(false)}
                className="px-4 py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600 text-center block"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
