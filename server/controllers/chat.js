import axios from "axios";
import { SERVER_URL_FASTAPI } from "../../client/src/config.js";
import { LOCAL_SERVER_URL_FASTAPI } from "../../client/src/config.js";
export const get_response = async (req, res) => {
    try {
        const {userInput} = req.body;
        console.log(userInput);
        // deployed url.
        const apiUrl = `https://${SERVER_URL_FASTAPI}/bot/response?message=${userInput}`;
        //local url
        // const apiUrl = `http://${LOCAL_SERVER_URL_FASTAPI}/bot/response?message=${userInput}`;
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message:  err.message});
    }
  };
