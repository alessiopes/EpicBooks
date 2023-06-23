import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SingleComment = ({ review }) => {
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${review._id}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNDc0ZWI5YzBmNzAwMTQ0ODRlZWIiLCJpYXQiOjE2ODc1MjcyNTAsImV4cCI6MTY4ODczNjg1MH0.crj3x4RgzhJupoQfcbK4xrGWFbSznQyZu3exf-KE0lY',
          },
        });
        const data = await response.json();
        setAdditionalData(data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati aggiuntivi:', error);
      }
    };

    fetchAdditionalData();
  }, [review._id]);

  return (
    <div>
      <h4>{review.author}</h4>
      <div className="my-1"><i>"{review.comment}"</i></div>
      <div>
      {[...Array(review.rate)].map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
      <small className="text-muted">{new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</small>
      <hr className="my-4" style={{ borderTop: '1px solid #777' }} />
    </div>
  );
  
};

export default SingleComment;
