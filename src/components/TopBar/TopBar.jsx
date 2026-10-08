import "./TopBar.css";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>✉ info@bbdu.ac.in</span>
        <span>📍 Lucknow, Uttar Pradesh</span>
        <span>📞 0-(522)-6196222</span>
      </div>

      <div className="topbar-right">
        <button>Academic Fee Payment</button>
        <button>Fee Brochure 2026-27</button>

       <div className="social">
  <span><FaPhoneAlt /></span>
  <span><FaFacebookF /></span>
  <span><FaXTwitter /></span>
  <span><FaLinkedinIn /></span>
  <span><FaInstagram /></span>
</div>
      </div>
    </div>
  );
};

export default TopBar;