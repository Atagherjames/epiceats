import "./price.css";

interface FoodPrice {
  food: string;
  price: number;
}

const Price = ({ food, price }: FoodPrice) => {
  return (
    <div className="priceContainer">
      <span>
        <strong>{food}:</strong>
      </span>{" "}
      <span>&#x20A6;{price}</span>
    </div>
  );
};

export default Price;
