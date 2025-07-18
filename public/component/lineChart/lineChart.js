import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { LineChartOptions } from "../../constraints";
import DateSelector from "../dateSelector/dateSelector";
import { LinearProgress } from "@mui/material";
import React from "react";

const plugin = {
  beforeInit: function (chart) {
    // Get reference to the original fit function
    const originalFit = chart.legend.fit;
    // Override the fit function
    chart.legend.fit = function fit() {
      // Bind scope in order to use `this` correctly inside it
      originalFit.bind(chart.legend)();
      this.height += 20; // Change the height
    };
  },
};

const LineChart = ({ apidata, loader }) => {
  React.useEffect(() => {
    window.addEventListener("afterprint", () => {
      console.log("check1");
      document.getElementsByTagName("canvas")[0].resize("100%", "1440px");
    });
  });
  console.log(apidata, "line");
  const data = {
    labels: apidata?.labels,
    datasets: [
      {
        label: "Avg Temp 2025",
        fill: false,
        borderColor: "#9BDD7C",
        borderCapStyle: "butt",
        backgroundColor: "rgb(255,255,255)",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#9BDD7C",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 10,
        data: apidata?.datasets?.[0].data,
        lineTension: 0.4,
      },
      {
        label: "Avg Temp 1980",
        fill: false,
        borderColor: "#E9A0A0",
        borderCapStyle: "butt",
        backgroundColor: "rgb(255,255,255)",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#E9A0A0",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 10,
        data: apidata?.datasets?.[1]?.data,
        lineTension: 0.4,
      },
    ],
  };

  return loader ? (
    <div
      style={{
        backgroundColor: "white",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        paddingTop: "12rem",
        width: "100%",
        height: "100%",
        borderRadius: "1.25rem",
      }}
    >
      <LinearProgress color="success" />
    </div>
  ) : (
    <>
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "1.875rem",
          paddingBottom: "1.56rem",
          width: "100%",
          maxHeight: "100%",
          borderRadius: "1.25rem",
        }}
      >
        <Line
          id="myChart"
          data={data}
          width={"1080px"}
          height={"295px"}
          options={LineChartOptions}
          plugins={[
            plugin,
            {
              beforeDraw(c) {
                var legends = c.legend.legendItems;
                legends[0].fillStyle = "#9BDD7C";
                legends[1].fillStyle = "#E9A0A0";
              },
            },
          ]}
        />
      </div>
      <div style={{ position: "absolute", left: "2.5rem", top: "3.8rem" }}>
        <DateSelector start="Jan" end="July" year="1980" />
      </div>
    </>
  );
};

export default LineChart;
