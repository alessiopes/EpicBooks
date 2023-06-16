import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import booksData from "../data/fantasy.json";

function LastestRelease() {
  const [books, setBooks] = useState(booksData);

  return (
    <Container className="mt-4">
      <h2>Ultime uscite</h2>
      <Row xs={1} sm={2} md={3} lg={4}>
        {books.map((book) => (
          <Col key={book.asin} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LastestRelease;