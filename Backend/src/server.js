

// // import dotenv from "dotenv";
// // dotenv.config();
// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);
// console.log("Gemini key loaded:", !!process.env.GEMINI_API_KEY);





// // import path from "path";
// // import dotenv from "dotenv";

// // dotenv.config({
// //   path: path.resolve(process.cwd(), "test.env")
// // });

// // console.log(process.env.HELLO);



// import express from "express";


// import analyzeRoute from "./routes/analyze.routes.js";
// // import testGemini from "./routes/ai.js"

// const app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // routes
// app.use("/api", analyzeRoute);
// // app.use("/testgemini", testGemini);

// // health check (optional but professional)
// app.get("/", (req, res) => {
//   res.send("AI Food Copilot Server Running");
// });

// // server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




import dotenv from "dotenv";
dotenv.config(); // 🔥 MUST BE FIRST

import express from "express";
import analyzeRoute from "./routes/analyze.routes.js";

console.log("Gemini key loaded:", !!process.env.GEMINI_API_KEY);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", analyzeRoute);

app.get("/", (req, res) => {
  res.send("AI Food Copilot Server Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
