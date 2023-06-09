"use client";
import "./page.css";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import SideNav from "../../public/component/sideNav/sideNav";
import Header from "../../public/component/header/header";
import InfoCards from "../../public/component/infoCards/infoCards";
import LineChart from "../../public/component/lineChart/lineChart";
import PieChart from "../../public/component/piegraph/piegraph";
import Schedule from "../../public/component/schedule/schedule";
import axios from "axios";

const Dashboard = () => {
  const { data: session, status } = useSession();

  const [lineData, setLineData] = useState({});
  const [pieData, setPieData] = useState({});
  const [loader, setLader] = useState(false);
  useEffect(() => {
    setLader(true);
    handleLineGraphData();
    // handleGetPieChartData();
  }, []);

  const handleLineGraphData = async () => {
    try {
      const res = await axios.get("https://vault-api-jwlu.onrender.com/safes");
      setLineData(res.data);
      if (res && res.data) {
        console.log("here api call");
        try {
          const res1 = await axios.get(
            "https://vault-api-jwlu.onrender.com/pie"
          );
          setPieData(res1.data);
          console.log(res1.data);
          setLader(false);
        } catch (error) {
          console.log("Error occured", error);
          alert("API failed Please reload the page");
          setLader(false);
        }
      } else {
        console.log("Api Failed check console");
        alert("API failed Please reload the page");
        setLader(false);
      }
    } catch (error) {
      console.log("Error occured", error);
      alert("API failed Please reload the page");
      setLader(false);
    }
  };
  if (status === "authenticated") {
    return (
      <>
        <article className="dashboard-wrapper">
          <SideNav />
          <div className="page-content-wrapper">
            <Header />
            <div className="info-cards-wrapper">
              <InfoCards type="Total Revenues" value="$2,129,430" />
              <InfoCards type="Total Transactions" value="1,520" />
              <InfoCards type="Total Likes" value="9,721" />
              <InfoCards type="Total Users" value="892" />
            </div>
            <div className="line-graph-container">
              <LineChart apidata={lineData?.[0]} loader={loader} />
            </div>
            <div className="dashboard-section-3">
              <div className="dashboard-pie-container">
                <PieChart apiData={pieData?.[0]} loader={loader} />
              </div>
              <div className="shedules-view">
                {" "}
                <Schedule />{" "}
              </div>
            </div>
          </div>
        </article>
      </>
    );
  } else {
    return (
      <div>
        <a href="/">Please Sign In to View the Dashboard</a>
      </div>
    );
  }
};

export default Dashboard;
