import React, { useState } from "react";
import { FaStar, FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import EditCommentModal from "./EditCommentModal";

const SingleComment = ({ review, onDeleteComment, onEditComment }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(review.comment);

  const handleDelete = () => {
    onDeleteComment(review._id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveComment = async () => {
    await onEditComment(review._id, editedComment);
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCommentChange = (e) => {
    setEditedComment(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={editedComment}
            onChange={handleCommentChange}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={handleSaveComment}
          >
            <FaSave /> Save
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setIsEditing(false)}
          >
            <FaTimes /> Cancel
          </button>
        </div>
      ) : (
        <div>
          <h4>{review.author}</h4>
          <div className="my-1">
            <i>"{review.comment}"</i>
          </div>
          <div>
            {[...Array(review.rate)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <small className="text-muted">
            {new Date(review.createdAt).toLocaleDateString("it-IT", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </small>
          <button
            className="btn btn-danger btn-sm"
            onClick={handleDelete}
            style={{ float: "right", marginRight: "10px" }}
          >
            <FaTrash />
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleEdit}
            style={{ float: "right", marginRight: "10px" }}
          >
            <FaEdit />
          </button>
          <hr className="my-4" style={{ borderTop: "1px solid #777" }} />
        </div>
      )}

      {showModal && (
        <EditCommentModal
          review={review}
          onSaveComment={handleSaveComment}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SingleComment;
