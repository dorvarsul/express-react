// src/pages/CarPage.jsx
import React from "react";
import useCars from "../components/Controller";
import DataTable from "../components/DataTable";
import CarForm from "../components/CarForm";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";
import TopFastCarsButton from "../components/TopFastCars";

const CarPage = () => {
  const {
    rows,
    form,
    setForm,
    editId,
    handleSubmit,
    handleDelete,
    handleEdit,
    search,
    setSearch,
    handleSearch,
    handleReset,
    sortKey,
    setSortKey,
    handleSort,
    handleSortReset,
    handleFetchTopFast,
  } = useCars();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Header title="Cars Database" />

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />

      <SortBar
        sortKey={sortKey}
        setSortKey={setSortKey}
        handleSort={handleSort}
        handleSortReset={handleSortReset}
      />

      <TopFastCarsButton handleFetchTopFast={handleFetchTopFast} />

      <CarForm
        form={form}
        setForm={setForm}
        editId={editId}
        handleSubmit={handleSubmit}
      />

      <DataTable data={rows} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default CarPage;
