import React from "react";
import { BarChartMultiple } from "../molecules/BarChartMultiple";
import { PieChart } from "../molecules/PieChart";
import { BarchartInteractive } from "../molecules/BarchartInteractive";

const MainDashboard: React.FC = () => {
  return (
    <div className="main-dashboard">
      <div className="flex gap-4">
        <div className="w-[50%]">
          <BarChartMultiple />
        </div>
        <div className="w-[50%]">
          <PieChart />
        </div>
      </div>
      <div className="mt-2 w-full">
        <BarchartInteractive />
      </div>
    </div>
  );
};

export default MainDashboard;
