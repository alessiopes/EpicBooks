import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import booksData from "../data/fantasy.json";
import SingleBook from "./SingleBook";

function LastestRelease() {
  const [books, setBooks] = useState(booksData); // Stato per i dati dei libri
  const [searchText, setSearchText] = useState(""); // Stato per il testo di ricerca

  // Gestore dell'evento di cambio del testo di ricerca
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Filtra i libri in base al testo di ricerca
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2>Ultime uscite</h2>
      {/* Input di ricerca controllato */}
      <input
        type="text"
        placeholder="Cerca un libro"
        value={searchText}
        onChange={handleSearch}
      />
      <Row xs={1} sm={2} md={3} lg={4}>
        {/* Rendering dei libri filtrati utilizzando il componente SingleBook */}
        {filteredBooks.map((book) => (
          <Col key={book.asin} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LastestRelease;
