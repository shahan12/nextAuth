import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { PieChartOptions } from "../../constraints";
import DateSelector from "../dateSelector/dateSelector";

const PieChart = ({ apiData }) => {
  let values = apiData?.value || [];
  let legends = apiData?.legend;
  let total = 0;
  let labelsvalues = [];

  useEffect(() => {
    if (apiData && Object.keys(apiData).length > 0) {
      total = [300, 50, 100].reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator) + parseInt(currentValue)
      );
      labelsvalues = values.map(function (value, i) {
        let p = Math.round((value / total) * 100) + "%";
        return legends[i] + " " + p;
      });
    }
  }, [apiData]);
  labelsvalues = [300, 50, 100].map(function (value, i) {
    let p = Math.round((value / 450) * 100) + "%";
    return legends?.[i] + " " + p;
  });
  const data = {
    labels: labelsvalues,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "1.875rem",
          borderRadius: "1.85rem",
          maxHeight: "16rem",
        }}
      >
        <Pie data={data} width="450" height="230" options={PieChartOptions} />
      </div>
      <div style={{ position: "absolute", right: "2.6rem", top: "1.93rem" }}>
        <DateSelector start="May" end="June" year="2021" />
      </div>
    </>
  );
};

export default PieChart;
