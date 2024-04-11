import React, { useEffect, useState } from "react";
import { FaPlus, FaRegCalendarTimes } from "react-icons/fa";
import { PiTelegramLogoFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Search from "../search/Search";
import "./layout.css";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setActiveItem(currentPath || "dashboard");
  }, [location.pathname]);

  const menuItems = [
    {
      label: "Théo",
      icon: <PiTelegramLogoFill className="icons" />,
      path: "/",
    },
    {
      label: "Lucas",
      icon: <FaRegCalendarTimes className="icons" />,
      path: "/lucas",
    },
    {
      label: "Julien",
      icon: <PiTelegramLogoFill className="icons" />,
      path: "/julien",
    },
    {
      label: "Maxime",
      icon: <FaRegCalendarTimes className="icons" />,
      path: "/maxime",
    },
    {
      label: "Arthur",
      path: "/arthur",
    },
  ];

  return (
    <div className={`side_navbar ${isOpen ? "" : "sider-collapsed"}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav_input_btn_content">
        <Search />
        <button className="btn mt-2">
          <FaPlus />
          Add customer
        </button>
      </div>
      <ul className="side_nav_menu">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`side_nav_list ${
              activeItem === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path} className="nav-link">
              {item.label}
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
