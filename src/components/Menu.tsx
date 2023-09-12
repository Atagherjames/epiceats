import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>FRESH AND LOCAL</h1>
      <h2>Explore our menus</h2>
      <div className="menuContainer">
        <Link to="/menu/lunch">
          <Button className="menu-btn">LUNCH AND DINNER</Button>
        </Link>
        <Link to="/menu/kids">
          <Button className="menu-btn">WINE & KIDS</Button>
        </Link>
        <Link to="/menu/takeout">
          <Button className="menu-btn">TAKE OUTS</Button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
