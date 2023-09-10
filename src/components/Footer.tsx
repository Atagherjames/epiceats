import "./footer.css";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li id="contact">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
