import "./menus.css";
import Price from "./Price";

const Kids = () => {
  return (
    <div className="menContainer">
      <h1>KIDS AND WHINE MENU</h1>
      <p className="menuItem">
        <Price food="House Red Whine" price={8000} />
        <Price food="Chicken Nuggets with Fries" price={2000} />
        <Price food="Peanut Butter" price={900} />
        <Price food="Pizza" price={1200} />
        <Price food="Macaroni" price={2000} />
        <Price food="Jelly Sandwich" price={3000} />
      </p>
    </div>
  );
};

export default Kids;
