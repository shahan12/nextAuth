"use client";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import "./search.css";
import searchIcon from "../../../public/Search icon.png";
import { WidthFull } from "@mui/icons-material";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("Search...");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => searchTerm === "" && setSearchTerm("Search...")}
    >
      <div className="input-wrapper">
        <input
          className="input-field"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => searchTerm === "Search..." && setSearchTerm("")}
        ></input>
        <div className="image-wrapper">
          <div className="search-icon-container">
            <Image src={searchIcon} fill={true} alt={"search"}></Image>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
