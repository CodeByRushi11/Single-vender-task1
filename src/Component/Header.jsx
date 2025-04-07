import { useState } from "react";
import bell from "../assets/bell.png";
import user from "../assets/user.png";
import chat from "../assets/chat.png";
import Search from "../assets/Search.png";
import ArrowDown from "../assets/arrowDown.png";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="w-full bg-white sticky top-0 h-[60px] py-[10px] px-[16px] sm:px-[20px] flex items-center justify-between shadow-sm z-50">
      {/* Search Input */}
      <div className="relative w-[50vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl flex-shrink">
        <input
          type="text"
          placeholder="Search Here"
          className="w-[50vw] px-[15px] py-[10px] rounded-md text-sm outline-none shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-gray-200"
        />
        <img
          src={Search}
          alt="Search"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-2">
        {/* Chat */}
        <div className="rounded-full bg-gray-100 p-2">
          <img src={chat} alt="Chat Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* Bell with Badge */}
        <div className="relative rounded-full bg-gray-100 p-2">
          <img src={bell} alt="Bell Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            5
          </span>
        </div>

        {/* Profile */}
        <div
          className="flex items-center gap-2 relative cursor-pointer"
          onClick={toggleProfileMenu}
        >
          <img
            src={user}
            alt="User"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
          />
          <div className="hidden sm:flex flex-col relative w-32 sm:w-40">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium truncate">John David</span>
              <img
                src={ArrowDown}
                alt="Dropdown"
                className={`w-3 h-2 ml-2 transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            <span className="text-[10px] text-gray-500">Admin</span>
          </div>

          {/* Dropdown */}
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
