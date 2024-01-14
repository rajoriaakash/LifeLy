import express from "express";
import { recommend_doctors,recommend_schools } from "../controllers/recommend.js";

const router = express.Router();

//recommend doctors route
router.post("/doctors",recommend_doctors);
//recommend exercises route

//recommend schools
router.get("/schools",recommend_schools);



export default router;