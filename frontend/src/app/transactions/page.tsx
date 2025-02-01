import React from "react";
import Dashboard from "../../components/templates/Dashboard";
import Transactions from "../../components/organisms/Transactions";

const TransactionsPage: React.FC = () => {
  return (
    <Dashboard>
      <Transactions />
    </Dashboard>
  );
};

export default TransactionsPage;
