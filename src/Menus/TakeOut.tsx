import "./menus.css";
import Price from "./Price";

const TakeOut = () => {
  return (
    <div className="menContainer">
      <h1>TAKE OUT MENU</h1>
      <p className="menuItem">
        <Price food="Suya" price={1200} />
        <Price food="Akara Bites" price={800} />
        <Price food="Platain Chips" price={900} />
        <Price food="Zobbo Drink" price={500} />
        <Price food="Palm Wine" price={700} />
        <Price food="Chin Chin" price={2500} />
      </p>
    </div>
  );
};

export default TakeOut;
