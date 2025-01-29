import { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar({ onButtonClick }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleButtonClick = (component) => {
    setActiveButton(component); // Update active button state
    onButtonClick(component); // Notify App.jsx about the active component
    setBurgerMenuOpen(false); // Close the burger menu
  };

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <div className="navbar">
      <img src="/images/logo.png" alt="Logo" className="logo" />
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

Navbar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
