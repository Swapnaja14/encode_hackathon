import express from "express";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.route.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api", analyzeRoute);

// health check (optional but professional)
app.get("/", (req, res) => {
  res.send("AI Food Copilot Server Running");
});

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
