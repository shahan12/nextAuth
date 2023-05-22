export const LineChartOptions = {
  responsive: false,
  layout: {
    autoPadding: false,
  },
  plugins: {
    color: "black",
    legend: {
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        color: "#000000",
        backgroundColor: "#9BDD7C",
        padding: 20,
      },
      title: {
        display: true,
      },
    },
    title: {
      display: true,
      text: "Montly Average Temprature",
      align: "start",
      color: "#000000",
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const PieChartOptions = {
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
