import { useState } from "react";
import frames from "../assets/frames.png";
import cart from "../assets/cart.png";
import profile from "../assets/profileNew.png";
import Phone from "../assets/Phone.png";
import settings from "../assets/settings.png";
import charts from "../assets/charts.png";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const [activeItem, setActiveItem] = useState(() => {
    return localStorage.getItem("activeItem") || "Dashboard";
  });

  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: frames, path: "Dashboard" },
    { title: "Profile", icon: profile, path: "/Profile" },
    { title: "Product", icon: cart, path: "/Product" },
    { title: "Chart/Graphs", icon: charts, path: "/Chart" },
    { title: "Contact", icon: Phone, path: "/Contact" },
    { title: "Setting", icon: settings, path: "/Setting" },
  ];

  const handleClick = (title, path) => {
    setActiveItem(title);
    localStorage.setItem("activeItem", title);
    navigate(path);
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-20 sm:hidden transition-opacity backdrop-blur-sm bg-black/40 ${
          isMobileOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMobileOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
    fixed sm:sticky top-0 sm:top-[65px] left-0 z-20 p-4 bg-[#edf2f7] text-white flex flex-col gap-5 justify-start
    transition-transform ${
      isMobileOpen ? "translate-x-0" : "-translate-x-full"
    } sm:translate-x-0 sm:flex
    w-1/2 sm:w-64
    h-screen sm:h-[calc(100vh-65px)]
  `}
      >
        {/* Close Button on Mobile */}
        <div className="flex justify-end sm:hidden mb-4">
          <button onClick={() => setIsMobileOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {menuItems.map((item) => (
          <div
            key={item.title}
            className={`flex items-center gap-x-3 px-4 py-2 cursor-pointer rounded-lg ${
              activeItem === item.title
                ? "bg-white text-black"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
            onClick={() => handleClick(item.title, item.path)}
          >
            <img src={item.icon} alt={item.title} className="w-6 h-6" />
            <span className="text-lg font-bold">{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
