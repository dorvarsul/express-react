import React from "react";

// CarForm handles both adding and editing cars
const CarForm = ({ form, setForm, editId, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col gap-4 border p-6 rounded-md shadow-md bg-white"
    >
      {/* Car Name */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Car Name:</label>
        <input
          type="text"
          value={form.Car_name ?? ""}
          onChange={(e) => setForm({ ...form, Car_name: e.target.value })}
          className="border p-2 rounded-md"
          required
        />
      </div>

      {/* Efficiency */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Efficiency (kWh/100km):</label>
        <input
          type="number"
          step="0.1"
          value={form.Efficiency ?? ""}
          onChange={(e) => setForm({ ...form, Efficiency: e.target.value })}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Fast Charge */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Fast Charge (kW):</label>
        <input
          type="number"
          value={form.Fast_charge ?? ""}
          onChange={(e) => setForm({ ...form, Fast_charge: e.target.value })}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Price ($):</label>
        <input
          type="number"
          value={form.Price ?? ""}
          onChange={(e) => setForm({ ...form, Price: e.target.value })}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Range */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Range (km):</label>
        <input
          type="number"
          value={form.Range ?? ""}
          onChange={(e) => setForm({ ...form, Range: e.target.value })}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Top Speed */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Top Speed (km/h):</label>
        <input
          type="number"
          value={form.Top_speed ?? ""}
          onChange={(e) => setForm({ ...form, Top_speed: e.target.value })}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Acceleration */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">
          Acceleration (0–100 km/h sec):
        </label>
        <input
          type="number"
          step="0.1"
          value={form.Acceleration ?? ""}
          onChange={(e) => setForm({ ...form, Acceleration: e.target.value })}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600"
      >
        {editId ? "Update Car" : "Add Car"}
      </button>
    </form>
  );
};

export default CarForm;
