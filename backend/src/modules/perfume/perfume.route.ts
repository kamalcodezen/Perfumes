import { Router } from "express";
import { createPerfume, getPerfumes } from "./perfume.controller.js";


const router = Router();

router.post("/", createPerfume);

router.get("/", getPerfumes);

export default router;