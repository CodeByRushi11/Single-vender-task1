import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const VisitorChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["2012", "2013", "2014", "2015"],
        datasets: [
          {
            label: "Segment A",
            data: [30, 20, 25, 35],
            backgroundColor: "#4BC0C0",
          },
          {
            label: "Segment B",
            data: [20, 30, 15, 25],
            backgroundColor: "#36A2EB",
          },
          {
            label: "Segment C",
            data: [15, 10, 20, 10],
            backgroundColor: "#FFCE56",
          },
          {
            label: "Segment D",
            data: [10, 15, 10, 15],
            backgroundColor: "#2C3E50",
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: "y",
        plugins: { legend: { position: "bottom" } },
        scales: {
          x: { stacked: true, beginAtZero: true },
          y: { stacked: true },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-md w-full md:w-[33.33%] border border-[#9B9B9B]">
      <h2 className="text-xl font-semibold mb-4 text-center">New Visitor</h2>
      <canvas ref={chartRef} className="block w-full" height={200}></canvas>
    </div>
  );
};

export default VisitorChart;
