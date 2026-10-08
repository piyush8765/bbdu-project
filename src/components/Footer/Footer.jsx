import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">
          <h2>BBD University</h2>

          <p>
            Providing quality education and building future leaders through
            innovation, research and excellence.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Admissions</li>
            <li>Placements</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>

          <p>Lucknow, Uttar Pradesh</p>
          <p>info@bbdu.ac.in</p>
          <p>+91 12345 67890</p>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

      </div>

      <hr />

      <p className="copy">
        © 2026 BBD University. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;