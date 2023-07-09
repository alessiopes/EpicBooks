import React, { useContext } from "react";
import { Navbar, Form, FormControl, FormCheck } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeProvider";
import { BsMoon, BsSun } from "react-icons/bs";

const MyNavbar = ({ query, updateQuery }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleInputChange = (event) => {
    updateQuery(event.target.value);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const themeIcon = theme === "dark" ? <BsMoon color="gray" /> : <BsSun color="gray" />;

  return (
    <Navbar
      bg={theme === "light" ? "light" : "dark"}
      variant={theme}
      expand="lg"
      className={theme === "light" ? "light-navbar" : ""}
      style={{ background: theme === "dark" ? "#222" : "inherit" }}
    >
      <style>
        {`
          .light-navbar {
            background-color: lightgray;
          }
        `}
      </style>
      <Navbar.Brand href="#home">Epicbooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
          />
        </Form>
        <div className="ml-3 d-flex align-items-center">
          <FormCheck
            id="themeSwitch"
            type="switch"
            checked={theme === "dark"}
            onChange={handleThemeToggle}
            label={themeIcon}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
