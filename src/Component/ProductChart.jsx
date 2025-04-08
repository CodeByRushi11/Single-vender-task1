import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
// import ChartDataLabels from "chartjs-plugin-datalabels";

const ProductChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Dark"],
        datasets: [
          {
            data: [45, 15, 10, 10, 20], // 45% main segment
            backgroundColor: [
              "#F44336",
              "#03A9F4",
              "#FFC107",
              "#4CAF50",
              "#2C3E50",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "70%", // Makes space in center
        plugins: {
          legend: { display: false },
          datalabels: {
            display: true,
            formatter: () => "45%",
            color: "#555",
            font: {
              weight: "bold",
              size: 18,
            },
          },
          title: {
            display: true,
            text: "Product",
            position: "bottom",
            font: {
              size: 16,
              weight: "600",
            },
          },
        },
      },
      //   plugins: [ChartDataLabels],
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-md  md:w-[33.33%] flex flex-col items-center justify-center border border-[#9B9B9B]">
      <h2 className="text-xl font-semibold mb-4 text-center">Product</h2>
      <canvas ref={chartRef} className="w-full h-auto" />
    </div>
  );
};

export default ProductChart;
