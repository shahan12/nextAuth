"use client";
import Image from "next/image";
import "./infoCards.css";
import { useEffect, useState } from "react";
import RevenueImg from "../../VectorRevenue.png";
import LikeImg from "../../like.png";
import TransactionImg from "../../Vectortrancaction.png";
import UserImg from "../../Vectoruser.png";

const InfoCards = ({ type, value }) => {
  const finalStyles =
    type === "Total Revenues"
      ? "#DDEFE0"
      : type === "Total Transactions"
      ? "#F4ECDD"
      : type === "Total Likes"
      ? "#EFDADA"
      : "#DEE0EF";
  return (
    <div
      className={`infoCard-wrapper`}
      style={{ backgroundColor: `${finalStyles}` }}
    >
      <div className="infocardImageContainer">
        <div className="infoImageWrapper">
          <Image
            alt={"cards"}
            src={
              type === "Total Revenues"
                ? RevenueImg
                : type === "Total Transactions"
                ? TransactionImg
                : type === "Total Likes"
                ? LikeImg
                : UserImg
            }
            fill={true}
          />
        </div>
      </div>

      <span className="cardsTypevalue">{type}</span>
      <p className="cardsValue">{value}</p>
    </div>
  );
};

export default InfoCards;
