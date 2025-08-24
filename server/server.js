// server.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import carRoutes from "./routes/dbRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Mount routes under /api
app.use("/api", carRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
