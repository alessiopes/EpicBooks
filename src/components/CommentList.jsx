import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ reviews, fetchReviews }) => {
  const handleDelete = async (reviewId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${reviewId}`,
          {
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNDc0ZWI5YzBmNzAwMTQ0ODRlZWIiLCJpYXQiOjE2ODg5MjkzMTAsImV4cCI6MTY5MDEzODkxMH0.EgfD1nX5SOBgBBiRDDXFmcRTeJEWPS0khFG4ByKyMxA",
            },
          }
        );

        if (response.ok) {
          console.log("Commento eliminato con successo");
        } else {
          console.error(
            "Errore durante l'eliminazione del commento:",
            response.status
          );
        }
      } catch (error) {
        console.error(
          "Errore durante la richiesta di eliminazione del commento:",
          error
        );
      }

      // Aggiorna i commenti dopo l'eliminazione
      fetchReviews();
    }
  };

  const handleEdit = async (reviewId, editedComment) => {
    console.log("ID del commento:", reviewId);
    console.log("Commento modificato:", editedComment);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${reviewId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNDc0ZWI5YzBmNzAwMTQ0ODRlZWIiLCJpYXQiOjE2ODc1MjcyNTAsImV4cCI6MTY4ODczNjg1MH0.crj3x4RgzhJupoQfcbK4xrGWFbSznQyZu3exf-KE0lY",
          },
          body: JSON.stringify({ comment: editedComment }),
        }
      );

      if (response.ok) {
        console.log("Risposta API:", response);
        console.log("Commento modificato con successo");
        await fetchReviews(); // Aggiorna i commenti dopo la modifica
      } else {
        console.error(
          "Errore durante la modifica del commento:",
          response.status
        );
      }
    } catch (error) {
      console.error(
        "Errore durante la richiesta di modifica del commento:",
        error
      );
    }
  };

  return (
    <div>
      <hr className="my-4" style={{ borderTop: "1px solid #777" }} />
      {reviews.map((review) => (
        <div key={review._id} className="mb-3">
          <SingleComment
            review={review}
            onDeleteComment={handleDelete}
            onEditComment={handleEdit}
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
