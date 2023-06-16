import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Welcome() {
  return (
    <Jumbotron fluid className="bg-light text-dark">
      <Container>
        <h1 className="display-4">Benvenuti nel nostro shop online!</h1>
        <p className="lead">
          Esplora la nostra vasta collezione di libri e trova le letture che ti appassionano. Scopri
          nuove storie, nuovi interessi e nuove esperienze.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Welcome;
