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
      name: "Dashboard",
      img: Dashboard,
    },
    {
      name: "Transaction",
      img: Transaction,
    },
    {
      name: "Schedule",
      img: Schedule,
    },
    {
      name: "Users",
      img: User,
    },
    {
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
                  <Image src={item.img} className="img-nav" />
                </div>
                <l1
                  className={`nav-title ${
                    activeTab === item.name && "add-active-style"
                  }`}
                  key={index}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </l1>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <div className="sideNavSection2container">
        <ol className="footerOptions">
          {footerText.map((item, index) => [
            <l1 className="footertitle" key={index}>
              {item}
            </l1>,
          ])}
        </ol>
      </div>
    </div>
  );
};

export default SideNav;
