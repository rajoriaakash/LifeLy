import express from "express";
import { recommend_doctors } from "../controllers/recommend.js";

const router = express.Router();

//recommend doctors route
router.post("/doctors",recommend_doctors);
//recommend exercises route



export default router;