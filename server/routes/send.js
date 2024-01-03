import express from "express";
import { sendAppointment, sendNewsletter } from "../controllers/send.js";

const router = express.Router();

//send appointment route
router.post("/appointment",sendAppointment);
//send newsletter route
router.post("/newsletter", sendNewsletter)



export default router;