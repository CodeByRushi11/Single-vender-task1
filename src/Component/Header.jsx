import { useState } from "react";
import bell from "../assets/bell.png";
import user from "../assets/user.png";
import chat from "../assets/chat.png";
import Search from "../assets/Search.png";
import ArrowDown from "../assets/arrowDown.png";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="w-full bg-white sticky top-0 h-[60px] py-[10px] px-[16px] sm:px-[20px] flex items-center justify-between shadow-sm z-50">
      {/* Hamburger for mobile */}
      <div className="sm:hidden mr-3">
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Search Input */}
      <div className="relative w-[50vw]">
        <input
          type="text"
          placeholder="Search Here"
          className="w-full px-4 pr-10 py-2 rounded-md text-sm outline-none shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
        />
        <img
          src={Search}
          alt="Search"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-2 relative">
        <div className="rounded-full bg-gray-100 p-2">
          <img src={chat} alt="Chat Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="relative rounded-full bg-gray-100 p-2">
          <img src={bell} alt="Bell Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            5
          </span>
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
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
