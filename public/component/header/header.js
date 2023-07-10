"use client";

import { useSession } from "next-auth/react";
import SearchBar from "../searchBar/searchbar";
import "./header.css";
import Image from "next/image";
import bellIcon from "../../../public/Vector.png";
import defaultImg from "../../../public/default.svg";
import { useState } from "react";
import DropDown from "../dropDown/dropDown";

const Header = () => {
  const { data } = useSession();
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="header-wrapper">
      <span>Dashboard</span>
      <div className="header-section-2">
        <SearchBar />
        <span className="bellIcon">
          <Image src={bellIcon} alt={"bell-icon"}></Image>
        </span>
        <span onClick={() => setDropDown(!dropDown)} className="relative">
          {data?.user && data?.user.image ? (
            <>
              <span className="profilePictureWrapper">
                <img
                  src={data?.user?.image}
                  className="profilePicture"
                  alt="user image"
                />
              </span>
            </>
          ) : (
            <span className="profilePictureWrapper">
              <Image src={defaultImg} alt={"profile"}></Image>
            </span>
          )}
          {dropDown && (
            <div className="dropDownWrapper">
              <DropDown />
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
