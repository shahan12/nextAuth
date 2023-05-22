import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { LineChartOptions } from "../../constraints";
import DateSelector from "../dateSelector/dateSelector";
import { LinearProgress } from "@mui/material";

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
  const data = {
    labels: apidata?.label,
    datasets: [
      {
        label: "Avg Temp 2023",
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
        data: apidata?.data1,
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
        data: apidata?.data2,
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
          data={data}
          width={"1000px"}
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
