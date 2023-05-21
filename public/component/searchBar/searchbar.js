"use client";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import "./search.css";
import searchIcon from "../../../public/Search Icon.png";
import { WidthFull } from "@mui/icons-material";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <input className="input-field" value="Search..."></input>
      <div className="image-wrapper">
        <div className="search-icon-container">
          <Image src={searchIcon} fill={true}></Image>
        </div>
      </div>
    </div>
  );
}
