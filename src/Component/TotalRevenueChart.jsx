import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import decrease from "../assets/decrease.png";
const TotalRevenueChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 40 }, (_, i) => i + 1),
        datasets: [
          {
            label: "Revenue",
            data: Array.from({ length: 40 }, () =>
              Math.floor(Math.random() * 100)
            ),
            backgroundColor: "rgba(249, 115, 22, 0.6)", // orange-500
            borderRadius: 2,
            barThickness: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { display: false },
          y: { display: false },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-md w-full min-h-[250px] border border-[#E5E7EB]">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded">
            <span className="text-blue-500 text-xl">$</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-bold text-gray-800">69,568</p>
          </div>
        </div>
        <div className="flex items-center text-red-600 text-sm font-medium space-x-1">
          <img src={decrease} alt="decrease" />
          <span>1.56%</span>
        </div>
      </div>
      <canvas ref={chartRef} height={100} className="w-full h-[100px]" />
    </div>
  );
};

export default TotalRevenueChart;
