import express from 'express';
import {getHealthFact, analyseProduct, followUpQuestions} from '../controllers/ai.js';

const router = express.Router();

router.get("/health-fact", getHealthFact);
router.get("/analyse-product", analyseProduct);
router.get("/followup", followUpQuestions);

export default router;