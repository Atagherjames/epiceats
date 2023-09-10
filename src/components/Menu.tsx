import Button from "@mui/material/Button";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>FRESH AND LOCAL</h1>
      <h2>Explore our menus</h2>
      <div className="menuContainer">
        <Button className="menu-btn">LUNCH AND DINNER</Button>
        <Button className="menu-btn">WINE & KIDS</Button>
        <Button className="menu-btn">TAKE OUTS</Button>
      </div>
    </div>
  );
};

export default Menu;
