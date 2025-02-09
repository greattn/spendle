import React from "react";
import { BarChartMultiple } from "../molecules/BarChartMultiple";
import { PieChart } from "../molecules/PieChart";
import { BarchartInteractive } from "../molecules/BarchartInteractive";
import { Separator } from "@/components/ui/separator";
const Statistics: React.FC = () => {
  return (
    <div className="main-dashboard">
      <div className="flex gap-4">
        <div className="w-[50%]">
          <BarChartMultiple />
        </div>
        <Separator orientation="vertical" />
        <div className="flex-1">
          <PieChart />
        </div>
      </div>
      <Separator className="my-2" />

      <div className=" w-full">
        <BarchartInteractive />
      </div>
    </div>
  );
};

export default Statistics;
