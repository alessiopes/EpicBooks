import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./SingleBook.css";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected, // Cambia lo stato di "selected" quando viene cliccato il libro
    }));
  };

  render() {
    const { book } = this.props; // Ottieni i dati del libro dalle props
    const { selected } = this.state; // Ottieni lo stato di "selected"

    return (
      <Card
        className={selected ? "selected-book" : ""}
        onClick={this.handleClick}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          {/* Prezzo */}
          <Card.Text className="text-muted">
            ${book.price.toFixed(2)}
          </Card.Text>{" "}
          {/* Pulsante per aggiungere al carrello */}
          <Button variant="primary">Add to Cart</Button>{" "}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
