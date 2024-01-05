import axios from "axios";
export const get_response = async (req, res) => {
    try {
        const {userInput} = req.body;
        // apiUrl to be replaced by deployed url.
        const apiUrl = `http://localhost:8000/api/response?message=${userInput}`;
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message:  err.message});
    }
  };
