"use client";

import { useSession } from "next-auth/react";
import SearchBar from "../searchBar/searchbar";
import "./header.css";
import Image from "next/image";
import bellIcon from "../../../public/Vector.png";

const Header = () => {
  const { data } = useSession();

  return (
    <div className="header-wrapper">
      <span>Dashboard</span>
      <div className="header-section-2">
        <SearchBar />
        <span className="bellIcon">
          <Image src={bellIcon} alt={"bell-icon"}></Image>
        </span>
        <span>
          {data?.user && (
            <>
              <span className="profilePictureWrapper">
                <img
                  src={data?.user?.image}
                  className="profilePicture"
                  alt="user image"
                />
              </span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
