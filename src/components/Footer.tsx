import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="footerContact">
            <h2>Contact Us</h2>
            <p>Gbagalape Phase1, Nyanya FCT Abuja.</p>
            <address>
              Email:{" "}
              <a href="mailto:atagherusha@gmail.com">atagherusha@gmail.com</a>
              <br />
              <br />
              Phone: <a href="tel:08084679823">08084679823</a>
            </address>
          </div>
          <div className="footerLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/menu/lunch">Menu</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
