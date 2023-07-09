import React, { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ bookAsin }) => {
  const [reviews, setReviews] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const [showError, setShowError] = useState(false);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNDc0ZWI5YzBmNzAwMTQ0ODRlZWIiLCJpYXQiOjE2ODg5MjkzMTAsImV4cCI6MTY5MDEzODkxMH0.EgfD1nX5SOBgBBiRDDXFmcRTeJEWPS0khFG4ByKyMxA",
          },
        }
      );
      const data = await response.json();
      setReviews(data);
      setDataReady(true);
    } catch (error) {
      console.error("Error retrieving reviews:", error);
      setShowError(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchReviews();
    }, 3000);

    return () => clearTimeout(timer);
  }, [bookAsin]);

  return (
    <div
      className="container"
      style={{
        position: "sticky",
        top: 0,
        maxHeight: "calc(100vh)",
        overflowY: "auto",
      }}
    >
      <style>
        {`
          .comment-area-container {
            overflow-y: hidden;
          }
          .comment-area-container.loading {
            overflow-y: hidden !important;
          }
        `}
      </style>
      <h2 className="text-center mt-5 mb-4">Reviews</h2>
      <div className={`row justify-content-center comment-area-container${dataReady ? "" : " loading"}`}>
        <div className="col-md-8">
          {showError ? (
            <Alert variant="danger">Error retrieving reviews. Please try again later.</Alert>
          ) : (
            <>
              {dataReady ? (
                <>
                  <CommentList reviews={reviews} fetchReviews={fetchReviews} />
                  <AddComment bookAsin={bookAsin} updateReviews={fetchReviews} />
                </>
              ) : (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentArea;
