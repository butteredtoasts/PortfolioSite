import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  return (
    <>
      <header className="wholeNavbar">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p>Tazzworks</p>
      </header>
    </>
  );
}

export default Navbar;
