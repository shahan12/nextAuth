"use client";
import "./SideNav.css";

const SideNav = () => {
  const navTitle = [
    "Dashboard",
    "Transaction",
    "Schedule",
    "Users",
    "Settings",
  ];
  const footerText = ["Help", "Contact Us"];

  return (
    <div className="sideNavWrapper">
      <div className="sideNavSection1Container">
        <div className="sideNavheader">Board.</div>
        <div className="section-2">
          <ol className="nav-options">
            {navTitle.map((item, index) => (
              <l1 className="nav-title" key={index}>
                {item}
              </l1>
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
