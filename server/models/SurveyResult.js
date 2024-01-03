import mongoose from "mongoose";

const SurveyResultSchema = new mongoose.Schema({
    // user_id: {
    //   type: String,
    //   required: true
    // },
    adhd_percent: {
      type: Number,
      required: true
    },
    autism_percent: {
      type: Number,
      required: true
    },
    dyslexia_percent: {
      type: Number,
      required: true
    }
  }, { timestamps: true });
  
const SurveyResult = mongoose.model("SurveyResult", SurveyResultSchema);
export default SurveyResult;