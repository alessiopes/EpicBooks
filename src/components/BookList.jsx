import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { ThemeContext } from "./ThemeContext";

function BookList({ books, selectedBook, onBookSelect }) {
  const { theme } = useContext(ThemeContext);

  const renderBooks = () => {
    const bookRows = [];
    for (let i = 0; i < books.length; i += 2) {
      const book1 = books[i];
      const book2 = books[i + 1];

      const bookCol1 = (
        <Col key={book1.asin} className="mb-4 col-6">
          <SingleBook
            book={book1}
            isSelected={selectedBook === book1.asin}
            onBookSelect={onBookSelect}
            theme={theme}
          />
        </Col>
      );

      const bookCol2 = book2 ? (
        <Col key={book2.asin} className="mb-4 col-6">
          <SingleBook
            book={book2}
            isSelected={selectedBook === book2.asin}
            onBookSelect={onBookSelect}
            theme={theme}
          />
        </Col>
      ) : null;

      bookRows.push(
        <Row key={i} className="justify-content-center">
          {bookCol1}
          {bookCol2}
        </Row>
      );
    }
    return bookRows;
  };

  return <>{renderBooks()}</>;
}

export default BookList;
