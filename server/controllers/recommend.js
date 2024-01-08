import axios from "axios";
import { SERVER_URL_FASTAPI } from "../config.js";
import { LOCAL_SERVER_URL_FASTAPI } from "../config.js";
export const recommend_doctors = async (req, res) => {
  
    try {
      const { state, disease } = req.body;
      //deployed
      const apiUrl = `${SERVER_URL_FASTAPI}/recommend/doctors?state=${state}&disease=${disease}`;
      //local
      // const apiUrl = `https://${LOCAL_SERVER_URL_FASTAPI}/recommend/doctors?state=${state}&disease=${disease}`;
  
      const response = await axios.get(apiUrl);
      res.status(200).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message:  err.message});
    }
  };
