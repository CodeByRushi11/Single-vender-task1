import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TotalSalesDoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Customer", "Revenue", "Amount"],
        datasets: [
          {
            data: [22658, 34568, 69568],
            backgroundColor: ["#347B83", "#CC2934", "#6E759F"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "60%",
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.raw;
                const total = 22658 + 34568 + 69568;
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
      {/* Title */}
      <h2 className="text-base font-semibold text-black mb-2">Total Sales</h2>

      {/* Legend Summary */}
      <div className="flex justify-between mb-4">
        {/* Amount */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#6E759F" }}
            ></span>
            Amount
          </div>
          <div className="text-lg font-bold text-black">69,568</div>
        </div>

        {/* Revenue */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#CC2934" }}
            ></span>
            Revenue
          </div>
          <div className="text-lg font-bold text-black">34,568</div>
        </div>

        {/* Customer */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#347B83" }}
            ></span>
            Customer
          </div>
          <div className="text-lg font-bold text-black">22,658</div>
        </div>
      </div>

      {/* Chart Canvas */}
      <canvas ref={chartRef} className="w-full h-[220px]" />
    </div>
  );
};

export default TotalSalesDoughnutChart;
