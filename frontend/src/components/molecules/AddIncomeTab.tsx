import React from "react";
import { CategoriesCombobox } from "../atoms/CategoriesCombobox";
import { DatePicker } from "../atoms/Datepicker";
import { Input } from "../ui/input";

export function AddIncomeTab() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Income</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Source
          </label>
          <CategoriesCombobox />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <Input type="text" placeholder="ex: 1,000,000" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <DatePicker />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 active:bg-primary/60 transition-all duration-300"
        >
          Add Income
        </button>
      </form>
    </div>
  );
}
