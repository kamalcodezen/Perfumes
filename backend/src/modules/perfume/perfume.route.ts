import { Router } from "express";
import { addPerfumes, getPerfumes } from "./perfume.controller.js";

const router = Router();

// add perfume
router.post("/", addPerfumes);

// get all perfumes
router.get("/", getPerfumes);

export default router;
