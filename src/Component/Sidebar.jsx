import { useState } from "react";
import frames from "../assets/frames.png";
import cart from "../assets/cart.png";
import Phone from "../assets/Phone.png";
import settings from "../assets/settings.png";
import charts from "../assets/charts.png";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: frames, path: "Dashboard" },
    { title: "Product", icon: cart, path: "/Product" },
    { title: "Profile", icon: cart, path: "/Profile" },
    { title: "Chart/Graphs", icon: charts, path: "/charts" },
    { title: "Contact", icon: Phone, path: "/contact" },
    { title: "Settings", icon: settings, path: "/settings" },
  ];

  const handleClick = (title, path) => {
    setActiveItem(title);
    navigate(path);
  };
  return (
    <div
      className="w-64 text-white flex flex-col gap-5 p-4 justify-center min-h-lg h-screen"
      style={{ height: "calc(100vh - 60px)", backgroundColor: "#edf2f7" }}
    >
      {menuItems.map((item) => (
        <div
          key={item.title}
          className={`flex items-center gap-x-3 px-4 py-2 cursor-pointer rounded-lg ${
            activeItem === item.title
              ? "bg-white text-blue-800"
              : "bg-blue-700 hover:bg-blue-600"
          }`}
          onClick={() => handleClick(item.title, item.path)}
        >
          <img src={item.icon} alt={item.title} className="w-6 h-6" />
          <span className="text-lg">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
