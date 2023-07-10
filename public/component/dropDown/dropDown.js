import React from "react";
import logoutIcon from "../../../public/logout.png";
import Image from "next/image";
import { signOut } from "next-auth/react";

function DropDown(props) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.5rem",
        fontSize: "1rem",
        border: "none",
        backgroundColor: "white",
      }}
      onClick={() => signOut()}
    >
      <Image
        src={logoutIcon}
        alt={"logpit"}
        className="logout-img"
        style={{ width: "1rem", height: "1rem" }}
      ></Image>
      Logout
    </button>
  );
}

export default DropDown;
