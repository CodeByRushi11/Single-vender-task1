import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import increase from "../assets/increase.png";
import decrease from "../assets/decrease.png";

const SellerStatisticCard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
        ],
        datasets: [
          {
            label: "Revenue",
            data: [90, 70, 20, 50, 25, 80, 10, 50, 90, 60, 30],
            backgroundColor: "rgba(30, 144, 255, 0.8)",
            borderRadius: 4,
          },
          {
            label: "Profit",
            data: [60, 50, 15, 40, 20, 60, 8, 35, 70, 50, 25],
            backgroundColor: "rgba(30, 144, 255, 0.4)",
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            ticks: {
              color: "#999",
            },
            grid: {
              color: "#eee",
            },
          },
          x: {
            stacked: true,
            ticks: {
              color: "#999",
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-xl border border-gray-300">
      <h2 className="text-lg font-semibold text-black mb-4">
        Seller Statistic
      </h2>

      {/* Top-Left Summary Section */}
      <div className="flex gap-12 mb-6">
        {/* Revenue Block */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-gray-600">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold text-black">34,568</div>
            <div className="flex items-center gap-1 text-green-500 text-xs">
              <img src={increase} alt="increase" className="w-6 h-4" />
              <span>1.56%</span>
            </div>
          </div>
        </div>

        {/* Profit Block */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
            <span className="text-gray-600">Profit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold text-black">34,568</div>
            <div className="flex items-center gap-1 text-green-500 text-xs">
              <img src={increase} alt="increase" className="w-6 h-4" />
              <span>1.56%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Chart */}
      <canvas ref={chartRef} className="w-full h-[300px]" />
    </div>
  );
};

export default SellerStatisticCard;
