import path from "path";
import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";

// Resolve current file and folder paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build absolute path to database file
const dbPath = path.join(__dirname, "cars.db");
console.log("Using DB:", dbPath);

// Connect to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("DB error: " + err.message);
  else console.log("Connected to SQLite");
});

// ------------------ CRUD ------------------

// Get all cars
export function getAllCars() {
  return new Promise((resolve, reject) => {
    // rowid is exposed as "id" so frontend always has a unique key
    db.all("SELECT rowid AS id, * FROM EV_cars", [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Add new car
export function addCar(car) {
  const {
    Car_name,
    Efficiency,
    Fast_charge,
    Price,
    Range,
    Top_speed,
    Acceleration,
  } = car;

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO EV_cars (Car_name, Efficiency, Fast_charge, Price, Range, Top_speed, Acceleration)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        Car_name,
        Efficiency,
        Fast_charge,
        Price,
        Range,
        Top_speed,
        Acceleration,
      ],
      function (err) {
        if (err) reject(err);
        else {
          // this.lastID gives the rowid of the inserted row
          resolve({ id: this.lastID, ...car });
        }
      }
    );
  });
}

// Update car by rowid
export function updateCar(id, car) {
  const {
    Car_name,
    Efficiency,
    Fast_charge,
    Price,
    Range,
    Top_speed,
    Acceleration,
  } = car;

  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE EV_cars 
       SET Car_name = ?, Efficiency = ?, Fast_charge = ?, Price = ?, Range = ?, Top_speed = ?, Acceleration = ?
       WHERE rowid = ?`, // rowid ensures correct row is targeted
      [
        Car_name,
        Efficiency,
        Fast_charge,
        Price,
        Range,
        Top_speed,
        Acceleration,
        id,
      ],
      function (err) {
        if (err) reject(err);
        else resolve({ updated: this.changes }); // number of rows updated
      }
    );
  });
}

// Delete car by rowid
export function deleteCar(id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM EV_cars WHERE rowid = ?", [id], function (err) {
      if (err) reject(err);
      else resolve({ deleted: this.changes }); // number of rows deleted
    });
  });
}

// Search cars by any field
export function searchCars(query) {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT rowid AS id, * 
       FROM EV_cars
       WHERE Car_name LIKE ?
          OR Efficiency LIKE ?
          OR Fast_charge LIKE ?
          OR Price LIKE ?
          OR Range LIKE ?
          OR Top_speed LIKE ?
          OR Acceleration LIKE ?`,
      Array(7).fill(`%${query}%`), // use query across all fields
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
}

// Get top 10 fastest cars with Efficiency > 170
export function getTopFastEfficientCars() {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT rowid AS id, * 
       FROM EV_cars
       WHERE Efficiency > 170
       ORDER BY Top_speed DESC
       LIMIT 10`,
      [],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
}
