import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartTitle = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2012", "2013", "2014", "2015"],
        datasets: [
          {
            label: "Line A",
            data: [3, 6, 4, 8],
            borderColor: "#E74C3C", // Red
            backgroundColor: "transparent",
            tension: 0.4,
          },
          {
            label: "Line B",
            data: [2, 5, 5, 7],
            borderColor: "#2ECC71", // Green
            backgroundColor: "transparent",
            tension: 0.4,
          },
          {
            label: "Line C",
            data: [1, 4, 4, 6],
            borderColor: "#2C3E50", // Black/Gray
            backgroundColor: "transparent",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            // text: "Chart Title",
            font: {
              size: 18,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-md w-full h-full min-h-[250px] border border-[#9B9B9B]">
      <h2 className="text-xl font-semibold mb-4 text-center">Chart Title</h2>
      <canvas
        ref={chartRef}
        className="w-full"
        style={{ height: "250px" }}
      ></canvas>
    </div>
  );
};

export default ChartTitle;
