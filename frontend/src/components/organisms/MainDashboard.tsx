import React from "react";
import { DatePicker } from "../atoms/Datepicker";
import { CategoriesCombobox } from "../atoms/CategoriesCombobox";

const MainDashboard: React.FC = () => {
  return (
    <div className="main-dashboard">
      <DatePicker />
      <CategoriesCombobox />
    </div>
  );
};

export default MainDashboard;
