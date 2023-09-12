import "./menus.css";
import Price from "./Price";

const Lunch = () => {
  return (
    <div className="menContainer">
      <h1>LUNCH AND DINNER MENU</h1>
      <p className="menuItem">
        <Price food="Akpu & Egusi" price={800} />
        <Price food="Fried Rice" price={1000} />
        <Price food="Jollof Rice" price={900} />
        <Price food="Egusi" price={800} />
        <Price food="Pepper Soup" price={700} />
        <Price food="Semo & Egusi" price={2400} />
        <Price food="Banga soup & Starch" price={2500} />
      </p>
    </div>
  );
};

export default Lunch;
