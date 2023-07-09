import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeProvider";
import booksData from "../data/fantasy.json";
import BookList from "./BookList";
import ItemsPerPageSelector from "./ItemsPerPageSelector";
import TotalResults from "./TotalResults";
import CommentArea from "./CommentArea";

function LastestRelease() {
  const [books] = useState(booksData);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedBookReviews, setSelectedBookReviews] = useState([]);
  const { theme } = useContext(ThemeContext);

  const handleItemsPerPageChange = (quantity) => {
    setItemsPerPage(quantity);
  };

  const handleBookSelect = (asin) => {
    setSelectedBook(asin);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${selectedBook}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNDc0ZWI5YzBmNzAwMTQ0ODRlZWIiLCJpYXQiOjE2ODg5MjkzMTAsImV4cCI6MTY5MDEzODkxMH0.EgfD1nX5SOBgBBiRDDXFmcRTeJEWPS0khFG4ByKyMxA",
            },
          }
        );
        const data = await response.json();
        setSelectedBookReviews(data);
      } catch (error) {
        console.error("Error retrieving reviews:", error);
      }
    };

    if (selectedBook) {
      fetchReviews();
    }
  }, [selectedBook]);

  const paginatedBooks = books.slice(0, itemsPerPage);

  return (
    <Container className={`mt-4 ${theme === "dark" ? "bg-dark text-light" : ""}`}>
      <h2>Lastest Releases</h2>
      <div className={`mb-4 ${theme === "dark" ? "text-light" : ""}`}>
        <TotalResults total={books.length} shown={paginatedBooks.length} />
        <div className="flex-grow-1">
          <ItemsPerPageSelector quantity={itemsPerPage} onChange={handleItemsPerPageChange} />
        </div>
      </div>
      <Row>
        <Col>
          <BookList
            books={paginatedBooks}
            selectedBook={selectedBook}
            onBookSelect={handleBookSelect}
          />
        </Col>
        <Col>
          <CommentArea bookAsin={selectedBook} reviews={selectedBookReviews} />
        </Col>
      </Row>
    </Container>
  );
}

export default LastestRelease;
