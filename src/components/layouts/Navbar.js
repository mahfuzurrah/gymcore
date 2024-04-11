import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown, Space } from "antd";
import { HiOutlineIdentification } from "react-icons/hi";
import { PiBarbellFill, PiForkKnife, PiTelegramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar({ toggleSidebar }) {

  const items = [
    {
      key: "1",
      label: <Link to="#">Profile</Link>,
    },
    {
      key: "2",
      label: <Link to="#">Profile</Link>,
    },
  ];

  return (
    <>
      <ul className="nav_menu">
        <li>
          <Link to="#" className="nav_link">
            <HiOutlineIdentification className="icons" />
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_link btn">
            <PiBarbellFill className="icons" />
            Training
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_link">
            <PiTelegramLogoFill className="icons" />
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_link">
            <PiForkKnife className="icons" />
          </Link>
        </li>
      </ul>
      <div className="right_area">
      <Dropdown menu={{ items }} className="mobile_hide">
        <Link onClick={(e) => e.preventDefault()}>
          <Space className="header_dropdown">
            <div className="title">
              <p>Antoine</p>
              <span>Coach</span>
            </div>
            <IoIosArrowDown />
          </Space>
        </Link>
      </Dropdown>
      <div className="toggle_btn" onClick={toggleSidebar}>
      <FaBars className="icons" />
    </div>
      </div>
    </>
  );
}

export default Navbar;
