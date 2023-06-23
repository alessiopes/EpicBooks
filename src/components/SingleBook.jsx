import React, { Component } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import CommentArea from "./CommentArea";
import "./SingleBook.css";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      showCommentModal: false,
    };
  }

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  handleCommentClick = (event) => {
    event.stopPropagation(); // Stoppa la propagazione degli eventi (selected)

    this.setState({
      showCommentModal: true,
    });
  };

  handleClose = () => {
    this.setState(
      {
        showCommentModal: false,
      },
      () => {
        this.setState({ selected: false });
      }
    );
  };

  render() {
    const { book } = this.props;
    const { selected, showCommentModal } = this.state;

    return (
      <Card
        className={selected ? "selected-book" : ""}
        onClick={this.handleCardClick}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <small className="text-muted">{book.asin}</small>{" "}
          </Card.Text>
          <Card.Text className="text-muted">${book.price.toFixed(2)}</Card.Text>
          <Button variant="primary" onClick={this.handleCommentClick}>
            View Reviews
          </Button>
        </Card.Body>

        <Modal show={showCommentModal} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Reviews</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <CommentArea bookAsin={book.asin} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    );
  }
}

export default SingleBook;
