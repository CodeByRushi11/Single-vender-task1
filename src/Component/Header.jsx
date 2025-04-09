import { useState } from "react";
import bell from "../assets/bell.png";
import user from "../assets/user.png";
import chat from "../assets/chat.png";
import ArrowDown from "../assets/arrowDown.png";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setIsNotificationOpen(false); // Close other menu if open
    setIsProfileOpen(false);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsChatOpen(false);
    setIsProfileOpen(false);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div>
      <nav className="w-full bg-white sticky top-0 h-[60px] py-[10px] px-[16px] sm:px-[20px] flex items-center justify-between shadow-sm z-50">
        {/* Hamburger for mobile */}
        <div className="sm:hidden mr-3">
          <button onClick={toggleSidebar}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Web Name*/}
        <div>
          <h2 className="text-3xl font-bold text-blue-600  ">Single Vendor</h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-2 relative">
          <div
            className="relative rounded-full bg-gray-100 p-2 cursor-pointer"
            onClick={toggleChat}
          >
            <img src={chat} alt="Chat Icon" className="w-5 h-5 sm:w-6 sm:h-6" />

            {isChatOpen && (
              <div className="absolute right-10 top-10 w-64 bg-white shadow-md rounded-md p-3 z-50">
                <p className="text-sm font-semibold mb-2">Messages</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>👤 John: “Hey, are you there?”</li>
                  <li>👤 Alice: “Please check my order.”</li>
                  <li>👤 Mike: “Thanks!”</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative rounded-full bg-gray-100 p-2 cursor-pointer"
            onClick={toggleNotification}
          >
            <img src={bell} alt="Bell Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              5
            </span>

            {isNotificationOpen && (
              <div className="absolute right-0 top-10 w-64 bg-white shadow-md rounded-md p-3 z-50">
                <p className="text-sm font-semibold mb-2">Notifications</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>🔔 New order placed</li>
                  <li>📦 Order #1234 shipped</li>
                  <li>✅ Password updated</li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile Section */}
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={toggleProfileMenu}
          >
            <img
              src={user}
              alt="User"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
            />

            {/* Show dropdown arrow and name on all screens */}
            <div className="flex flex-col w-4 sm:w-24">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium truncate hidden sm:inline">
                  John David
                </span>
                <img
                  src={ArrowDown}
                  alt="Dropdown"
                  className={`w-3 h-2 ml-2 transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              <span className="text-[10px] text-gray-500 hidden sm:inline">
                Admin
              </span>
            </div>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 top-12 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link
                  to="/Profile"
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </Link>
                <Link
                  to="/Setting"
                  href=""
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  onClick={() => setIsSignOutModalOpen(true)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
          {/* Modal for signout confimation */}
        </div>
      </nav>
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
              <Link
                to="/"
                onClick={() => setIsSignOutModalOpen(false)}
                className="px-4 py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600 text-center block"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
