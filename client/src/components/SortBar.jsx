import React from "react";

const SortBar = ({ sortKey, setSortKey, handleSort, handleSortReset }) => {
  const options = [
    "Efficiency",
    "Fast_charge",
    "Price",
    "Range",
    "Top_speed",
    "Acceleration",
  ];

  return (
    <div className="mb-4 flex gap-2">
      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">Select criteria...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <button
        onClick={handleSort}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Sort
      </button>

      <button
        onClick={handleSortReset}
        className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
      >
        Reset
      </button>
    </div>
  );
};

export default SortBar;
