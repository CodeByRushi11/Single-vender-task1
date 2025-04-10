import React from "react";
import frames from "../assets/Frame 1000007016.png";
import img from "../assets/Frame 1000007017.png";
import image2 from "../assets/Frame 1000007018.png";
import frames4 from "../assets/Group 1000004408.png";
import frames5 from "../assets/Frame 1000007024.png";
import frames6 from "../assets/Frame 1000007025.png";
import frames7 from "../assets/Group 1000004409.png";
import charts from "../assets/charGraph.png";
const Chart = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col gap-4">
      {/* Title */}
      <div className="flex items-center gap-2 mb-6">
        <img src={charts} alt="Frames Icon" className="w-6 h-6" />
        <h1 className="font-bold text-[20px] sm:text-[25px]">Chart/Graph</h1>
      </div>

      {/* Top Stats Row */}
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-md bg-white">
          <img
            src={frames}
            alt="Total Amount"
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="p-4 rounded-md bg-white">
          <img
            src={img}
            alt="Total Amount"
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="p-4 rounded-md bg-white">
          <img
            src={image2}
            alt="Total Amount"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      {/* Middle Stats & Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="rounded-md bg-white">
          <img src={frames4} alt="Chart" className="w-full h-auto rounded-md" />
        </div>

        <div className="rounded-md bg-white">
          <img src={frames5} alt="Chart" className="w-full h-auto rounded-md" />
        </div>

        <div className="rounded-md bg-white">
          <img src={frames6} alt="Chart" className="w-full h-auto rounded-md" />
        </div>
      </div>

      {/* Bottom Chart */}
      <div className="bg-white p-4 rounded-md shadow ">
        <img
          src={frames7}
          alt="Total Amount"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default Chart;
