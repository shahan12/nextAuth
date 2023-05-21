import { useEffect } from "react";
import { Pie } from "react-chartjs-2";

const options = {
  radius: 73,
  responsive: false,
  layout: {
    autoPadding: false,
    padding: {
      right: 100,
    },
  },
  plugins: {
    color: "black",
    legend: {
      position: "right",
      align: "center",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 30,
        color: "#000000",
      },
      title: {
        display: true,
      },
    },
    title: {
      display: true,
      text: "Top Product",
      align: "start",
      padding: {
        left: 70,
        // right: 50,
      },
      color: "#000000",
      font: {
        size: 18,
      },
    },
  },
};
const PieChart = ({ apiData }) => {
  let values = apiData?.value || [];
  let legends = apiData?.legend;
  let total = 0;
  let labelsvalues = [];
  console.log(values, legends, labelsvalues);

  useEffect(() => {
    if (Object.keys(apiData).length > 0) {
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
    console.log(apiData, p, value, total, "p");
    return legends[i] + " " + p;
  });
  console.log(labelsvalues, "label");
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
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: "1.875rem",
        borderRadius: "1.85rem",
        maxHeight: "16rem",
      }}
    >
      <Pie data={data} width="450" height="230" options={options} />
    </div>
  );
};

export default PieChart;
