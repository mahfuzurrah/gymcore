import React, { useState } from "react";
import { FaPlus, FaRegCalendarTimes } from "react-icons/fa";
import { PiTelegramLogoFill } from "react-icons/pi";
import logo from "../assets/img/logo.png";
import Search from "../search/Search";
import "./layout.css";

const Sidebar = ({ isOpen }) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      label: "Théo",
      icon: <PiTelegramLogoFill className="icons" />,
      isActive: true,
    },
    {
      id: 2,
      label: "Lucas",
      icon: <FaRegCalendarTimes className="icons" />,
      isActive: false,
    },
    {
      id: 3,
      label: "Julien",
      icon: <PiTelegramLogoFill className="icons" />,
      isActive: false,
    },
    {
      id: 4,
      label: "Maxime",
      icon: <FaRegCalendarTimes className="icons" />,
      isActive: false,
    },
    { id: 5, label: "Arthur", isActive: false },
  ]);

  const setActiveItem = (id) => {
    // Map over items and update isActive status
    const updatedItems = menuItems.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setMenuItems(updatedItems);
  };

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
            key={item.id}
            className={`side_nav_list ${item.isActive ? "active" : ""}`}
            onClick={() => setActiveItem(item.id)}
          >
            <p className="nav-link">
              {item.label}
              {item.icon}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
