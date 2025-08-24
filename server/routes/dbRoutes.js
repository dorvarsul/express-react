// routes/carRoutes.js
import express from "express";
import {
  getAllCars,
  addCar,
  updateCar,
  deleteCar,
  searchCars,
  getTopFastEfficientCars,
} from "../db/dbHandler.js";

const router = express.Router();

// GET all cars from DB
router.get("/pull", async (req, res) => {
  try {
    const cars = await getAllCars(); // fetch rows
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD a new car to DB
router.post("/post", async (req, res) => {
  try {
    const newCar = await addCar(req.body); // insert new car

    res.json(newCar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE an existing car by id
router.put("/update/:id", async (req, res) => {
  try {
    const updated = await updateCar(req.params.id, req.body); // update row
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a car by id
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await deleteCar(req.params.id); // remove row
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SEARCH cars by query string
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query; // e.g. /api/search?q=Tesla
    if (!q) return res.status(400).json({ error: "Missing search query" });

    const results = await searchCars(q);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET top 10 fastest cars with Efficiency > 170
router.get("/top-fast", async (req, res) => {
  try {
    const cars = await getTopFastEfficientCars();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
