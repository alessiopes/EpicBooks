import React from "react";

function MyFooter() {
  return (
    <footer className="footer bg-dark text-light pt-3">
      <div className="container text-center">
        <p>
          Epibooks - Ecommerce di libri
          <br />
          Via Roma, 123 - 00100 Roma, Italia
          <br />
          Tel: 0123456789 - Email: info@epibooks.com
        </p>
        <p>
          &copy; {new Date().getFullYear()} Epibooks. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

export default MyFooter;
