import express from "express";
import multer from "multer";
import { analyzeProduct } from "../controllers/analyze.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/text", analyzeProduct);
router.post("/image", upload.single("image"), analyzeProduct);

export default router;
