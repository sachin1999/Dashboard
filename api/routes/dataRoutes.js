import express from "express";
import { getCountry, getData, getSector, getTopic, getIntensity, getRelevance, getLikelihood, getPestle } from "../controllers/dataController.js";

const router = express.Router();

router.get("/data", getData);
router.get("/country", getCountry);
router.get("/sectors", getSector);
router.get("/topics", getTopic);
router.get("/intensity", getIntensity);
router.get("/relevance", getRelevance);
router.get("/likelihood", getLikelihood);
router.get("/pestle", getPestle);
export default router;