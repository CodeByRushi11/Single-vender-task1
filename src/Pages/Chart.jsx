import React from "react";
import charts from "../assets/charGraph.png";
import TotalAmountChart from "../Component/TotalAmountChart";
import TotalRevenueChart from "../Component/TotalRevenueChart";
import TotalCustomerChart from "../Component/TotalCustomerChart";
import SellerStatisticChart from "../Component/SellerStatisticChart";
import TotalSalesPieChart from "../Component/TotalSalesPieChart";
import TotalSalesDoughnutChart from "../Component/TotalSalesDoughnutChart ";
import SalesPurchaseReturnChart from "../Component/SalesPurchaseReturnChart ";
const Chart = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <img src={charts} alt="Frames Icon" className="w-6 h-6" />
        <h1 className="font-bold text-[20px] sm:text-[25px]">Chart/Graph</h1>
      </div>
      {/* Top Chart */}
      <div className="flex flex-wrap gap-4 sm:gap-6">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <TotalAmountChart />
          <TotalRevenueChart />
          <TotalCustomerChart />
        </div>
        {/* Middle Chart */}
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <SellerStatisticChart />
          <TotalSalesPieChart />
          <TotalSalesDoughnutChart />
        </div>

        {/*Bottom Chart */}
        <div className="w-full">
          <SalesPurchaseReturnChart />
        </div>
      </div>
    </div>
  );
};

export default Chart;
