import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        autism: {
            type: [Number],
            required: true,
            validate: {
              validator: function(v) {
                return v.length === 10;
              },
              message: props => `${props.path} must have length 10`
            }
        },
        adhd: {
            type: [Number],
            required: true,
            validate: {
              validator: function(v) {
                return v.length === 10;
              },
              message: props => `${props.path} must have length 10`
            }
        },
        dyslexia: {
            type: [Number],
            required: true,
            validate: {
              validator: function(v) {
                return v.length === 10;
              },
              message: props => `${props.path} must have length 10`
            }
        },
        gender : {
          type : String,
          required : true
        }
    },
    {timestamps : true}
);

const Survey = mongoose.model("Survey", SurveySchema);
export default Survey;