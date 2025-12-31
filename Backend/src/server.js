import express from 'express';
import cors from "cors";

const app = express()
app.use(cors);
app.use(express.json());

import aiRoutes from './routes/ai.js';
app.use("/api/ai", aiRoutes);

const port = 8001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});