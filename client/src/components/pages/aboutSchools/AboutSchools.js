import React, { useEffect, useState } from "react";
import Image from './schoolCard.js';
import "./style.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { SERVER_URL } from "../../../config.js";
import axios from 'axios';

function AboutSchools() {
  const [users, setUsers] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/recommend/schools`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="container">
        <h1 className="heading">Integrated Schools</h1>
        <h2>Where your child will not feel lesser than any other child</h2>

        <div className="school-grid">
          {users.map((user, index) => (
            <div key={index} className="school-item">
              <div className="image-container">
                <Image url={user.image} />
              </div>
              <div className="title">{user.location}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default AboutSchools;
