import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SignupChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "1/16",
          "2/16",
          "3/16",
          "4/16",
          "5/16",
          "6/16",
          "7/16",
          "8/16",
          "9/16",
          "10/16",
          "11/16",
          "12/16",
        ],
        datasets: [
          {
            label: "Monthly Data",
            data: [6, 9, 4, 6, 10, 13, 7, 3, 7, 10, 6, 9],
            backgroundColor: [
              "#4285F4",
              "#F4B400",
              "#0F9D58",
              "#AB47BC",
              "#00ACC1",
              "#8E24AA",
              "#26C6DA",
              "#D32F2F",
              "#7CB342",
              "#7E57C2",
              "#29B6F6",
              "#F4B400",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-md w-full md:w-[33.33%] border border-[#9B9B9B]">
      <h2 className="text-xl font-semibold mb-4 text-center">Online Signup</h2>
      <canvas ref={chartRef} className="block w-full" height={200}></canvas>
    </div>
  );
};

export default SignupChart;
