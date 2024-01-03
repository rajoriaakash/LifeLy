import React, { useState } from "react";
import "./review.css";
import img1 from "../../../images/review.png";
import axios from "axios";
import { SERVER_URL } from '../../../config.js';
import { Link, useNavigate } from 'react-router-dom'


export default function Review() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    rating: "",
    review: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  const addReview = () => {
    console.log(user)
    axios.post(`${SERVER_URL}/review/add`, user).then((res) => {
        console.log(res.data);
        navigate('/', { replace: true })
    });
  };

  return (
    <>
      <div className="review-box">
        <div className="leftrev">
          <img src={img1} alt="" />
        </div>
        <div className="review-container">
          <div className="revh1">Write a Review</div>
          <div className="revh2">
            I'm not perfect, but I'm still good enough
            Share your experience here!!
          </div>
          <div className="revsec">
           
              <input
                type="text"
                onChange={handleChange}
                className="revname"
                name="name"
                value={user.name}
                placeholder="Enter your name..."
              />
              <input
                type="text"
                onChange={handleChange}
                className="revmail"
                name="email"
                value={user.email}
                placeholder="Enter your email..."
              />
              
              <textarea
                type="text"
                onChange={handleChange}
                className="revsearch"
                name="review"
                review={user.email}
                placeholder="Write a review..."
              />
              <fieldset>
                <span class="star">
                  <input
                    type="radio"
                    onChange={handleChange}
                    id="rating-5"
                    name="rating"
                    value={5}
                  />
                  <label for="rating-5">5 stars</label>
                  <input
                    type="radio"
                    onChange={handleChange}
                    id="rating-4"
                    name="rating"
                    value={4}
                    checked="checked"
                  />
                  <label for="rating-4">4 stars</label>
                  <input
                    type="radio"
                    onChange={handleChange}
                    id="rating-3"
                    name="rating"
                    value={3}
                  />
                  <label for="rating-3">3 stars</label>
                  <input
                    type="radio"
                    onChange={handleChange}
                    id="rating-2"
                    name="rating"
                    value={2}
                  />
                  <label for="rating-2">2 stars</label>
                  <input
                    type="radio"
                    onChange={handleChange}
                    id="rating-1"
                    name="rating"
                    value={1}
                  />
                  <label for="rating-1">1 stars</label>
                  <input
                    type="radio"
                    onChange={handleChange}
                    id="rating-0"
                    name="rating"
                    value={0}
                    class="star-cb-clear"
                  />
                  <label for="rating-0">0 stars</label>
                </span>
              </fieldset>
          </div>
          <div style={{ display: "flex", justifyContent: "center",alignItems:"center" ,height:"15%",width:"45%"}}>
              <input
                type="button"
                className="login-btn"
                onClick={addReview}
                value="ADD"
                name="login"
              ></input>
            </div>
        </div>
      </div>
    </>
  );
}
