import axios from "axios";
export const recommend_doctors = async (req, res) => {
    try {
      const { state, disease } = req.body;
      const apiUrl = `http://127.0.0.1:8000/recommend/doctors?state=${state}&disease=${disease}`;
  
      const response = await axios.get(apiUrl);
      res.status(200).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message:  err.message});
    }
  };
