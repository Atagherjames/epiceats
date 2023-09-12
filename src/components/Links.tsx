import "./links.css";
import { Link } from "react-router-dom";

interface ChidlProps {
  sendDataToParent: (data: boolean) => void;
}

const Links = ({ sendDataToParent }: ChidlProps) => {
  return (
    <div className="links">
      <div>
        <img src="/food menu.jpg" alt="" />
      </div>

      <div className="link">
        <ul>
          <li>
            <Link to="/" onClick={() => sendDataToParent(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu/lunch" onClick={() => sendDataToParent(false)}>
              Menus
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => sendDataToParent(false)}>
              About Us
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={() => sendDataToParent(false)}>
              Contact Us
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
