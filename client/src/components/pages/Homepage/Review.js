import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleReview from './SingleReview';
import './review.css';
import { SERVER_URL } from '../../../config';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {

      const response = await axios.get(`${SERVER_URL}/review/get`);
      setReviews(response.data);
    }
    fetchReviews();
  }, []);

  return (
    <div id='review' className='review'>
      <div className='circle'></div>
      <div className='circle2'></div>
      <div style={{ paddingTop: '4%' }} className='problem-div-que'>
        What people say about <span className='logo'>LifeLy</span>
      </div>
      <div className='review-card-outer'>
        {reviews.map((review) => (
          <div className='review-card-outer-div'>
            <SingleReview key={review._id} review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
