import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const OrderChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Data A",
            data: [300, 350, 400, 320, 420, 450],
            borderColor: "#E74C3C",
            backgroundColor: "transparent",
            tension: 0.4,
            pointBackgroundColor: "#E74C3C",
          },
          {
            label: "Data B",
            data: [280, 370, 330, 400, 380, 400],
            borderColor: "#16A085",
            backgroundColor: "transparent",
            tension: 0.4,
            pointBackgroundColor: "#16A085",
          },
          {
            label: "Data C",
            data: [200, 250, 220, 280, 300, 310],
            borderColor: "#F39C12",
            backgroundColor: "transparent",
            tension: 0.4,
            pointBackgroundColor: "#F39C12",
          },
          {
            label: "Data D",
            data: [100, 150, 200, 250, 270, 290],
            borderColor: "#F1C40F",
            backgroundColor: "transparent",
            tension: 0.4,
            pointBackgroundColor: "#F1C40F",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom" } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 100 },
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-md w-full lg:w-1/3 border border-[#9B9B9B]">
      <h2 className="text-xl font-semibold mb-4 text-center">Today Order</h2>
      <canvas ref={chartRef} className="block w-full" height={200}></canvas>
    </div>
  );
};

export default OrderChart;
