import  express  from "express";
import { addReview, getReviews } from "../controllers/review.js";
const router = express.Router();

router.post("/add", addReview);
router.get("/get", getReviews);

export default router;

