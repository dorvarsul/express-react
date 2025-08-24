import React from "react";

const TopFastCarsButton = ({ handleFetchTopFast }) => {
  return (
    <button
      onClick={handleFetchTopFast}
      className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 mb-4"
    >
      Top 10
    </button>
  );
};

export default TopFastCarsButton;
