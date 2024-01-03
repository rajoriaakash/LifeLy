import React from 'react';
import './singlereview.css';

const SingleReview = ({ review }) => {
  return (
    <div className='review-card'>
      <div className='review-card-inner'>
        <div className='review-card-name'>{review.name}</div>
        <div>{review.rating} stars</div>
        <div className='review-card-text'>{review.review}</div>
      </div>
    </div>
  );
};

export default SingleReview;
