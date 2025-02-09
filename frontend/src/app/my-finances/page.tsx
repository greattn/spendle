import React from "react";
import Dashboard from "../../components/templates/Dashboard";
import Finances from "../../components/organisms/Finances";

const DashboardPage: React.FC = () => {
  return (
    <Dashboard>
      <Finances />
    </Dashboard>
  );
};

export default DashboardPage;
