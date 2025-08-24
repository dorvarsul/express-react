import { useEffect, useState } from "react";
import {
  fetchCars,
  addCar,
  updateCar,
  deleteCar,
  searchCars,
  fetchTopFastCars,
} from "./ApiHandler";

// Custom hook to manage car data and CRUD logic
export default function useCars() {
  const [rows, setRows] = useState([]); // table rows (cars)
  const [originalRows, setOriginalRows] = useState([]);
  const [form, setForm] = useState({
    Car_name: "",
    Efficiency: "",
    Fast_charge: "",
    Price: "",
    Range: "",
    Top_speed: "",
    Acceleration: "",
  });
  const [editId, setEditId] = useState(null); // track current edit row
  const [search, setSearch] = useState(""); // search query
  const [sortKey, setSortKey] = useState(""); // which field to sort by

  useEffect(() => {
    loadCars(); // load data on mount
  }, []);

  const loadCars = async () => {
    const data = await fetchCars(); // fetch all cars from API
    setRows(data);
    setOriginalRows(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateCar(editId, form);
      setEditId(null);
    } else {
      await addCar(form);
    }
    resetForm();
    loadCars();
  };

  const handleDelete = async (id) => {
    await deleteCar(id);
    loadCars();
  };

  const handleEdit = (row) => {
    setForm(row);
    setEditId(row.id);
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      loadCars(); // reset to all cars
    } else {
      const results = await searchCars(search);
      setRows(results);
    }
  };

  const handleReset = () => {
    setSearch(""); // clear input
    loadCars(); // reload all cars
  };

  const resetForm = () => {
    setForm({
      Car_name: "",
      Efficiency: "",
      Fast_charge: "",
      Price: "",
      Range: "",
      Top_speed: "",
      Acceleration: "",
    });
  };

  const handleSort = () => {
    if (!sortKey) return; // do nothing if no criteria chosen

    const sorted = [...rows].sort((a, b) => {
      const valA = parseFloat(a[sortKey]) || 0;
      const valB = parseFloat(b[sortKey]) || 0;
      return valB - valA; // descending (highest → lowest)
    });

    setRows(sorted);
  };

  const handleSortReset = () => {
    setSortKey(""); // clear dropdown
    setRows(originalRows); // restore original unsorted data
  };

  const handleFetchTopFast = async () => {
    const results = await fetchTopFastCars();
    setRows(results); // overwrite table with top 10 fastest efficient cars
  };

  return {
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
  };
}
