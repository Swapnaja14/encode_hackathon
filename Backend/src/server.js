import express from 'express';
import cors from "cors";
import aiRoutes from './routes/ai.js';

const app = express();
const port = 8001;

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running on port 8001");
});

console.log("Attempting to start server...");

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Keep the process alive
setInterval(() => {
    // console.log("Heartbeat...");
}, 10000);