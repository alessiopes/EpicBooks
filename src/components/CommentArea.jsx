import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ bookAsin }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNDc0ZWI5YzBmNzAwMTQ0ODRlZWIiLCJpYXQiOjE2ODc1MjcyNTAsImV4cCI6MTY4ODczNjg1MH0.crj3x4RgzhJupoQfcbK4xrGWFbSznQyZu3exf-KE0lY',
            },
          }
        );
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error retrieving reviews:', error);
      }
    };

    fetchReviews();
  }, [bookAsin]);

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Reviews</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <CommentList reviews={reviews} />
          <AddComment />
        </div>
      </div>
    </div>
  );
};

export default CommentArea;
