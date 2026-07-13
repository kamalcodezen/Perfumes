import { Router } from "express";
import {
  addPerfumes,
  getPerfumeById,
  getPerfumes,
} from "./perfume.controller.js";

const router = Router();

// add perfume
router.post("/", addPerfumes);

// get all perfumes
router.get("/", getPerfumes);

// get perfume by id
router.get("/:id", getPerfumeById);

export default router;
