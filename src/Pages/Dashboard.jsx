import React from "react";
import frames from "../assets/frames.png";
import SignupChart from "../Component/SignupChart";
import VisitorChart from "../Component/VisitorChart";
import OrderChart from "../Component/OrderChart";
import ChartTitle from "../Component/ChartTitle";
import ProductChart from "../Component/ProductChart";
import TopSellingTable from "../Component/TopSellingTable";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <img src={frames} alt="Frames Icon" className="w-6 h-6" />
        <h1 className="font-bold text-[20px] sm:text-[25px]">Dashboard</h1>
      </div>

      {/* Charts */}
      <div className="flex flex-wrap gap-4 sm:gap-6">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <SignupChart />
          <VisitorChart />
          <OrderChart />
        </div>

        {/* Chart section (line + donut) */}

        {/* Chart section (line + donut) */}
        <div className="w-full flex flex-col lg:flex-row gap-4">
          {/* ChartTitle takes 2/3 */}
          <div className="w-full lg:w-2/3 min-h-[200px]">
            <ChartTitle />
          </div>

          {/* ProductChart takes 1/3 */}
          <div className="w-full lg:w-1/3 min-h-[200px]">
            <ProductChart />
          </div>
        </div>

        {/* Top Selling Table */}
        <div className="w-full">
          <TopSellingTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
