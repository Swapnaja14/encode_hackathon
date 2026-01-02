import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.routes.js";
// import testGemini from "./routes/ai.js"

dotenv.config();
import express from "express";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", analyzeRoute);
// app.use("/testgemini", testGemini);

// health check (optional but professional)
app.get("/", (req, res) => {
  res.send("AI Food Copilot Server Running");
});

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);
});

