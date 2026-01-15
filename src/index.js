import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ SIEMPRE antes de las rutas
app.use(express.json());

app.use("/auth", authRoutes);

app.use("/tasks", taskRoutes);


app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
