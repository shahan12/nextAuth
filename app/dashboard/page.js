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
  // const { data: session, status } = useSession();

  const [lineData, setLineData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    datasets: [
      {
        label: "My First Dataset", // Label for this specific line/dataset
        data: [65, 59, 80, 81, 56, 55], // Y-axis values corresponding to labels
        fill: false, // Whether to fill the area under the line
        borderColor: "rgb(75, 192, 192)", // Line color
        tension: 0.1, // Smoothness of the line
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 86, 27],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  });
  const [pieData, setPieData] = useState({
    labels: ["Red", "Blue", "Yellow"], // Labels for each slice
    datasets: [
      {
        data: [300, 50, 100], // Values for each slice
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Color for 'Red'
          "rgba(54, 162, 235, 0.6)", // Color for 'Blue'
          "rgba(255, 206, 86, 0.6)", // Color for 'Yellow'
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  const [loader, setLader] = useState(false);
  useEffect(() => {
    setLader(true);
    setTimeout(() => {
      setLader(false);
    }, 1000);
    // handleLineGraphData();
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
  if (true) {
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
