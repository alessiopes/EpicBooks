import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <SingleComment key={review._id} review={review} />
      ))}
    </div>
  );
};

export default CommentList;
