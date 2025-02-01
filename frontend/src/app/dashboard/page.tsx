import React from "react";
import Dashboard from "../../components/templates/Dashboard";
import MainDashboard from "../../components/organisms/MainDashboard";

const DashboardPage: React.FC = () => {
  return (
    <Dashboard>
      <MainDashboard />
    </Dashboard>
  );
};

export default DashboardPage;
