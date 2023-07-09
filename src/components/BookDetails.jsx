import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { asin } = useParams();

  return (
    <div>
      <h2>Dettagli del libro</h2>
      <p>ASIN: {asin}</p>
      {/* Altri dettagli del libro */}
    </div>
  );
}

export default BookDetails;
