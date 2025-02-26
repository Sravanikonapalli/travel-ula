import React ,{ useState } from "react";
import "../styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <h1>Travel Ula</h1>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu size={30}/>
      </button>
      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#itinerary">Itinerary</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#terms">COnditions</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


