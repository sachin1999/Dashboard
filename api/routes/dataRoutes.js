import express from "express";
import { getCountry, getData, getSector, getTopic, getIntensity, getRelevance, getLikelihood, getPestle } from "../controllers/dataController.js";

const router = express.Router();

router.get("/api/data", getData);
router.get("/api/country", getCountry);
router.get("/api/sectors", getSector);
router.get("/api/topics", getTopic);
router.get("/api/intensity", getIntensity);
router.get("/api/relevance", getRelevance);
router.get("/api/likelihood", getLikelihood);
router.get("/api/pestle", getPestle);
export default router;