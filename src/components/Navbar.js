import React, { useState } from "react";

function Navbar({ onButtonClick }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleButtonClick = (component) => {
    setActiveButton(component);
    onButtonClick(component);
    setBurgerMenuOpen(false); // Close burger menu when a button is clicked
  };

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <div className="navbar">
      <img src="./assets/logo.png" alt="Logo" className="logo" />
      <div className={`buttons ${burgerMenuOpen ? "show" : ""}`}>
        <span
          className={`btn ${activeButton === "Home" ? "active" : ""}`}
          onClick={() => handleButtonClick("Home")}
        >
          Home
        </span>
        <span
          className={`btn ${activeButton === "About" ? "active" : ""}`}
          onClick={() => handleButtonClick("About")}
        >
          About
        </span>
        <span
          className={`btn ${activeButton === "Skills" ? "active" : ""}`}
          onClick={() => handleButtonClick("Skills")}
        >
          Skills
        </span>
        <span
          className={`btn ${activeButton === "Projects" ? "active" : ""}`}
          onClick={() => handleButtonClick("Projects")}
        >
          Projects
        </span>
        <span
          className={`btn ${activeButton === "Contact" ? "active" : ""}`}
          onClick={() => handleButtonClick("Contact")}
        >
          Contact
        </span>
      </div>
      <div className="burger-button" onClick={toggleBurgerMenu}>
        <div className={`bar ${burgerMenuOpen ? "open" : ""}`}>-</div>
        <div className={`bar ${burgerMenuOpen ? "open" : ""}`}>-</div>
        <div className={`bar ${burgerMenuOpen ? "open" : ""}`}>-</div>
      </div>
    </div>
  );
}

export default Navbar;
