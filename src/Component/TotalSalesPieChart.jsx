import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import increase from "../assets/increase.png"; // Make sure this path is correct

const TotalSalesPieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Profit", "Revenue"],
        datasets: [
          {
            data: [28546, 34564],
            backgroundColor: ["#B26292", "#413D92"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.raw;
                const total = 28546 + 34564;
                const percentage = ((value / total) * 100).toFixed(1);
                return `${value.toLocaleString()} (${percentage}%)`;
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-[380px]">
      <h2 className="text-base font-semibold text-black mb-2">Total Sales</h2>

      {/* Summary Section */}
      <div className="flex justify-between mb-4">
        {/* Revenue */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#413D92" }}
            ></span>
            Revenue
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold text-black">34,568</div>
            <div className="flex items-center gap-1 text-green-600 text-xs">
              <img src={increase} alt="increase" className="w-4 h-4" />
              <span>1.56%</span>
            </div>
          </div>
        </div>

        {/* Profit */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#B26292" }}
            ></span>
            Profit
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold text-black">28,546</div>
            <div className="flex items-center gap-1 text-green-600 text-xs">
              <img src={increase} alt="increase" className="w-4 h-4" />
              <span>1.56%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <canvas ref={chartRef} className="w-full h-[220px]" />
    </div>
  );
};

export default TotalSalesPieChart;
