"use client";
import { useState } from "react";
import "./sideNav.css";
import Dashboard from "../../../public/dashboard_icondashbord.png";
import Transaction from "../../../public/transaction_icontransaction.png";
import Schedule from "../../../public/schedule_icon.png";
import User from "../../../public/user_icon.png";
import Setting from "../../../public/setting_icon.png";
import Image from "next/image";

const SideNav = () => {
  const navTitle = [
    {
      id: 1,
      name: "Dashboard",
      img: Dashboard,
    },
    {
      id: 2,
      name: "Transaction",
      img: Transaction,
    },
    {
      id: 3,
      name: "Schedule",
      img: Schedule,
    },
    {
      id: 4,
      name: "Users",
      img: User,
    },
    {
      id: 5,
      name: "Settings",
      img: Setting,
    },
  ];
  const footerText = ["Help", "Contact Us"];
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="sideNavWrapper">
      <div className="sideNavSection1Container">
        <div className="sideNavheader">Board.</div>
        <div className="section-2">
          <ol className="nav-options">
            {navTitle.map((item, index) => (
              <div className="nav-options-cotainer">
                <div className="side-nav-img">
                  <Image src={item.img} className="img-nav" alt={"side-nav"} />
                </div>
                <li
                  className={`nav-title ${
                    activeTab === item.name && "add-active-style"
                  }`}
                  key={`${index}_${item}_${item.id}`}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <div className="sideNavSection2container">
        <ol className="footerOptions">
          {footerText.map((item, index) => [
            <li className="footertitle" key={`${index}_${item}`}>
              {item}
            </li>,
          ])}
        </ol>
      </div>
    </div>
  );
};

export default SideNav;
