import axios from "axios";
import urls from '../../client/src/config.js'
const { SERVER_URL_FASTAPI, LOCAL_SERVER_URL_FASTAPI } = urls

export const recommend_doctors = async (req, res) => {
    try {
      const { state, disease } = req.body;
      //deployed
      const apiUrl = `${SERVER_URL_FASTAPI}/recommend/doctors?state=${state}&disease=${disease}`;
      //local
      // const apiUrl = `${LOCAL_SERVER_URL_FASTAPI}/recommend/doctors?state=${state}&disease=${disease}`;
  
      const response = await axios.get(apiUrl);
      res.status(200).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message:  err.message});
    }
  };
