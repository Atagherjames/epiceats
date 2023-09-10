import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introContainer">
      <div className="left">
        <img src="/food.jpg" alt="" />
      </div>
      <div className="right">
        <h3>delicious</h3>
        <h1>NIGERIAN CUISINE</h1>
        <h3>on the bay</h3>
        <h4>
          <img src="/flourish.png" />
        </h4>
        <h4>welcome to EpicEats resturant</h4>
      </div>
    </div>
  );
};

export default Introduction;
