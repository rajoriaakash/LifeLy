import axios from "axios";
import SurveyResult from "../models/SurveyResult.js";
export const get_percentage = async (req, res) => {
    try {
      const {
        result
      } = req.body;
      // convert gender
      console.log(req.body.result)
      console.log(req.body)
      const gender = result[0] == 1 ? "f" : "m";

      // convert autism
      const autism = [];
      for (let i = 1; i <= 10; i++) {
        autism.push(result[i]);
      }

      // convert adhd
      const adhd = [];
      for (let i = 11; i <= 20; i++) {
        adhd.push(result[i]);
      }

      // convert dyslexia
      const dyslexia = [];
      for (let i = 21; i <= 30; i++) {
        dyslexia.push(result[i]);
      }
      // console.log(autism)
      // console.log(adhd)
      // console.log(dyslexia)
      //for autism
      const autismReqBody = {
        "A1_Score": 0,
        "A2_Score": 0,
        "A3_Score": 0,
        "A4_Score": 0,
        "A5_Score": 0,
        "A6_Score": 0,
        "A7_Score": 0,
        "A8_Score": 0,
        "A9_Score": 0,
        "A10_Score": 0,
        "gender_f": gender === "f" ? 1 : 0,
        "gender_m": gender === "m" ? 1 : 0
      };
      console.log(autism)
      for (let i = 0; i < 10; i++) {
        if(i+1===1 ||i+1===7 ||i+1===8 ||i+1===10 ){
            if (autism[i] == 1 || autism[i] == 2) {
                autismReqBody[`A${i+1}_Score`] = 1;
              } else {
                autismReqBody[`A${i+1}_Score`] = 0;
            }
        }
        // console.log(autismReqBody[`A${i+1}_Score`]);
        else{
            if (autism[i] == 1 || autism[i] == 2) {
                autismReqBody[`A${i+1}_Score`] = 0;
              } else {
                autismReqBody[`A${i+1}_Score`] = 1;
            }
        }
        // console.log(autismReqBody[`A${i+1}_Score`]);
      }
      console.log(autismReqBody)

    //   console.log(autismReqBody);
      const autismApiUrl = `http://127.0.0.1:8000/predict/autism`;
      const autismRequest = axios.post(autismApiUrl, autismReqBody);
  
      //for adhd
      let adhd_percent = 0;
      for (const option in adhd) {
        if (adhd[option] == 1) adhd_percent += 10;
        else if (adhd[option] == 2) adhd_percent += 6.6;
        else if (adhd[option] == 3) adhd_percent += 3.3;
        else if (adhd[option] == 4) adhd_percent += 0;
      }
  
      //for dyslexia
      let dyslexia_percent = 0;
      for (const option in dyslexia) {
        // console.log(option)
        if (dyslexia[option] == 1) dyslexia_percent += 10;
        else if (dyslexia[option] == 2) dyslexia_percent += 6.6;
        else if (dyslexia[option] == 3) dyslexia_percent += 3.3;
        else if (dyslexia[option] == 4) dyslexia_percent += 0;
      }
  
      const [autismResponse] = await Promise.all([autismRequest]);
  
      const predictionString = autismResponse.data.prediction;
      const predictionArray = predictionString.split(' ');
      const autism_probab = parseFloat(predictionArray[1].replace(']', '').trim());
      var autism_percent = autism_probab *100;
      if(autism_percent<1)autism_percent=autism_percent*100;
      console.log(autism_percent)
      console.log(adhd_percent)
      console.log(dyslexia_percent)
      const survey_result = new SurveyResult({
        autism_percent: autism_percent,
        adhd_percent: adhd_percent,
        dyslexia_percent: dyslexia_percent
      });
      const savedResult = await survey_result.save();
      res.status(201).json(savedResult);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err.message
      });
    }
  };
  