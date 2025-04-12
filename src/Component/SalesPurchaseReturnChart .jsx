import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import decreaseIcon from "../assets/decrease.png"; // Your red line chart icon

const SalesPurchaseReturnChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 100 }, (_, index) => index + 1),
        datasets: [
          {
            label: "Sales/Purchase Return",
            data: Array.from({ length: 100 }, () => Math.random() * 1000),
            backgroundColor: "rgba(0, 123, 255, 0.6)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-full">
      <div className="mb-2">
        <h2 className="text-base font-semibold text-black">
          Sales/Purchase Return
        </h2>
        <div className="flex items-center mt-1 space-x-2">
          <p className="text-lg font-semibold text-black">$84,555</p>
          <img src={decreaseIcon} alt="Decrease" className="w-5 h-4" />
          <span className="text-red-500 font-semibold text-sm">-1.02%</span>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-[220px] w-full">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default SalesPurchaseReturnChart;
