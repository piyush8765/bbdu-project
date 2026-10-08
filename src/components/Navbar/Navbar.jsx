import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

useEffect(() => {

  const handleScroll = () => {

    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }

  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);
  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>

      <div className="logo">
        <img src={logo} alt="BBD Logo" />
      </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
  <NavLink to="/about" className="nav-item">
    ABOUT <FaChevronDown className="down" />
  </NavLink>
</li>
        <li>
  <NavLink to="/schools" className="nav-item">
    SCHOOLS <FaChevronDown className="down" />
  </NavLink>
</li>

<li>
  <NavLink to="/programs" className="nav-item">
    PROGRAMS <FaChevronDown className="down" />
  </NavLink>
</li>

<li>
  <NavLink to="/admissions" className="nav-item">
    ADMISSIONS <FaChevronDown className="down" />
  </NavLink>
</li>

<li>
  <NavLink to="/placements" className="nav-item">
    PLACEMENTS <FaChevronDown className="down" />
  </NavLink>
</li>

<li>
  <NavLink to="/contact" className="nav-item">
    CONTACT
  </NavLink>
</li>
      </ul>

      <button className="helpline-btn">
        <FaPhoneAlt />
        <div>
          <span>Admission Helpline</span>
          <p>0-(522)-6196300</p>
        </div>
      </button>
<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>
    </nav>
  );
};

export default Navbar;