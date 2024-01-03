import Review from "../models/Review.js";

/* ADD A REVIEW */
export const addReview = async (req, res) => {
  try {
    const { name, email, rating, review } = req.body;

    const newReview = new Review({
      name,
      email,
      rating,
      review,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET ALL REVIEWS */
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
