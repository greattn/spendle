import React from "react";
import Dashboard from "../../components/templates/Dashboard";
import Statistics from "../../components/organisms/Statistics";

const StatisticsPage: React.FC = () => {
  return (
    <Dashboard>
      <Statistics />
    </Dashboard>
  );
};

export default StatisticsPage;
