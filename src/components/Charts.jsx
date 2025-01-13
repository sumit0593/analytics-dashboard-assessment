import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Charts = ({ data }) => {
  // Map over the data and replace undefined with empty string
  const makes = data.map((item) => item.Make || ""); 
  const makeCounts = makes.reduce((acc, make) => {
    acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});

  const barChartData = {
    labels: Object.keys(makeCounts),
    datasets: [
      {
        label: "Number of Vehicles",
        data: Object.values(makeCounts),
        backgroundColor: [
          "#1976d2", "#ff4081", "#4caf50", "#ff9800", "#9c27b0",
          "#3f51b5", "#f44336", "#009688", "#673ab7",
        ],
      },
    ],
  };

  const vehicleTypes = data.map((item) => item["Electric Vehicle Type"] || ""); 
  const typeCounts = vehicleTypes.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: "Vehicle Types",
        data: Object.values(typeCounts),
        backgroundColor: ["#3f51b5", "#009688", "#ff4081", "#4caf50", "#ff9800"],
      },
    ],
  };

  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center", padding: "2rem" }}>
      <div style={{ flex: "1", height: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Vehicles by Make</h3>
        <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
      </div>
      <div style={{ flex: "1", height: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Electric Vehicle Types</h3>
        <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Charts;
