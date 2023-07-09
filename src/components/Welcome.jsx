import React, { useContext } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeProvider";

function Welcome() {
  const { theme } = useContext(ThemeContext);

  return (
    <Jumbotron fluid className={`bg-${theme === "dark" ? "dark" : "light"} text-${theme === "dark" ? "light" : "dark"}`}>
      <Container>
        <h1 className="display-4">Welcome to our online shop!</h1>
        <p className="lead">
          Explore our wide collection of books and find the readings that ignite
          your passion. Discover new stories, new interests, and new
          experiences.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Welcome;
