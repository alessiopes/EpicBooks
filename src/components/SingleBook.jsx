import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "./SingleBook.css";
import { ThemeContext } from "../context/ThemeProvider";
import ThemeToggle from "../context/ThemeToggle";

function SingleBook({ book, isSelected, onBookSelect }) {
  const { theme } = useContext(ThemeContext);

  const handleCardClick = () => {
    if (!isSelected) {
      onBookSelect(book.asin);
    }
  };

  return (
    <Card
      className={isSelected ? "selected-book" : ""}
      onClick={handleCardClick}
      bg={theme === "dark" ? "dark" : "light"}
      text={theme === "dark" ? "light" : "dark"}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <small className="text-muted">{book.asin}</small>{" "}
        </Card.Text>
        <Card.Text className="text-muted">${book.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
