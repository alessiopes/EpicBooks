import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

const AddComment = ({ bookAsin, updateReviews }) => {
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState("");

  const handleRatingSelect = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        comment: commentText,
        rate: rating,
        elementId: bookAsin,
      };
  
      console.log("Dati inviati:", requestData);

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNDc0ZWI5YzBmNzAwMTQ0ODRlZWIiLCJpYXQiOjE2ODg5MjkzMTAsImV4cCI6MTY5MDEzODkxMH0.EgfD1nX5SOBgBBiRDDXFmcRTeJEWPS0khFG4ByKyMxA",
          },
          body: JSON.stringify({
            comment: commentText,
            rate: rating,
            elementId: bookAsin,
          }),
        }
      );

      if (response.ok) {
        console.log("Recensione inviata con successo");
        setCommentText("");
        setRating("");
        updateReviews(); // Chiamata alla funzione fetchReviews di CommentArea aggiornare i commenti
      } else {
        console.error(
          "Errore durante l'invio della recensione:",
          response.status
        );
      }
    } catch (error) {
      console.error("Errore durante l'invio della recensione:", error);
    }
  };

  const ratingOptions = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label fw-bold mb-3">
            Comment:
          </label>
          <textarea
            id="comment"
            className="form-control"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating:
          </label>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="ratingDropdown">
              {rating ? `${rating} stars` : "Select a rating"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleRatingSelect("1")}>
                1 star
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRatingSelect("2")}>
                2 stars
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRatingSelect("3")}>
                3 stars
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRatingSelect("4")}>
                4 stars
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRatingSelect("5")}>
                5 stars
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <hr className="mb-3 my-4" /> {/* Divider */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
