import React from "react";

const SearchBar = ({ search, setSearch, handleSearch, handleReset }) => {
  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Search cars..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 flex-grow"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Search
      </button>
      <button
        onClick={handleReset}
        className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
