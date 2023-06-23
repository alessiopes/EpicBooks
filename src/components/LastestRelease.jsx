import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import booksData from "../data/fantasy.json";
import SingleBook from "./SingleBook";
import ItemsPerPageSelector from "./ItemsPerPageSelector";
import TotalResults from "./TotalResults";

function LastestRelease() {
  const [books, setBooks] = useState(booksData); // Stato per i dati dei libri
  const [searchText, setSearchText] = useState(""); // Stato per il testo di ricerca
  const [itemsPerPage, setItemsPerPage] = useState(12); // Stato per la quantità di elementi per pagina
  const [lastVisibleIndex, setLastVisibleIndex] = useState(itemsPerPage);

  // Gestore dell'evento di cambio del testo di ricerca
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Gestore dell'evento di cambio della quantitá degli elementi per pagina
  const handleItemsPerPageChange = (quantity) => {
    setItemsPerPage(quantity);
    setLastVisibleIndex(quantity);
  };

  // Filtra i libri in base al testo di ricerca
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Mostra i risultati nella quantitá scelta in itemsPerPage
  const paginatedBooks = filteredBooks.slice(0, itemsPerPage);

  return (
    <Container className="mt-4">
      <h2>Lastest Releases</h2>
      <div className="input-group mb-4 mt-2">
        <input
          type="text"
          className="form-control"
          id="search-bar"
          placeholder="Search for a book..."
          value={searchText}
          onChange={handleSearch}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
      <div className="mb-4">
        <TotalResults
          total={filteredBooks.length}
          shown={paginatedBooks.length}
        />
        <div className="flex-grow-1">
          <ItemsPerPageSelector
            quantity={itemsPerPage}
            onChange={handleItemsPerPageChange}
          />
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4}>
        {paginatedBooks.map((book) => (
          <Col key={book.asin} className="mb-4 col-6">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LastestRelease;
