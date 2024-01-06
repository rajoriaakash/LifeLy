import express from "express";
import { get_response } from "../controllers/chat.js";

const router = express.Router();

router.post("/lifely",get_response);

export default router;