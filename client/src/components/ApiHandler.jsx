import axios from "axios";

const API = "http://localhost:5000/api";

// Fetch all cars
export const fetchCars = async () => {
  try {
    const res = await axios.get(`${API}/pull`);
    return res.data;
  } catch (err) {
    console.error("Error fetching cars:", err);
    throw new Error("Failed to fetch cars");
  }
};

// Add new car
export const addCar = async (car) => {
  try {
    const res = await axios.post(`${API}/post`, car);
    return res.data;
  } catch (err) {
    console.error("Error adding car:", err);
    throw new Error("Failed to add car");
  }
};

// Update car by id
export const updateCar = async (id, car) => {
  try {
    const res = await axios.put(`${API}/update/${id}`, car);
    return res.data;
  } catch (err) {
    console.error(`Error updating car with id ${id}:`, err);
    throw new Error("Failed to update car");
  }
};

// Delete car by id
export const deleteCar = async (id) => {
  try {
    const res = await axios.delete(`${API}/delete/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Error deleting car with id ${id}:`, err);
    throw new Error("Failed to delete car");
  }
};

// Search cars
export const searchCars = async (query) => {
  try {
    const res = await axios.get(`${API}/search?q=${query}`);
    return res.data;
  } catch (err) {
    console.error("Error searching cars:", err);
    throw new Error("Failed to search cars");
  }
};

// Fetch top 10 fastest efficient cars
export const fetchTopFastCars = async () => {
  try {
    const res = await axios.get(`${API}/top-fast`);
    return res.data;
  } catch (err) {
    console.error("Error fetching top fast cars:", err);
    throw new Error("Failed to fetch top fast cars");
  }
};
