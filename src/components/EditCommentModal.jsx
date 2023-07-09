import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditCommentModal = ({ review, onSaveComment, onCloseModal }) => {
    const [editedComment, setEditedComment] = useState(review.comment);
  
    const handleCommentChange = (e) => {
      setEditedComment(e.target.value);
    };
  
    const handleSave = async () => {
      console.log("Invio al server ", editedComment);
  
      await onSaveComment(review._id, editedComment);
      onCloseModal();
    };
  
    return (
      <Modal show={true} onHide={onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              value={editedComment}
              onChange={handleCommentChange}
              rows={4}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={onCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  

export default EditCommentModal;
