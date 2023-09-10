import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="about">
        <div className="left">
          <img src="/ungwacooks.jpg" alt="" />
        </div>
        <div className="right">
          <h2>About us</h2>
          <p>
            At EpicEats, we believe that dining is not just about food; it's an
            experience, a journey that transcends taste and nourishes the soul.
            Nestled in the heart of FCT, EpicEats Restaurant has been serving up
            unforgettable moments and delectable flavors for 10 years. We are
            more than just a restaurant; we are a culinary destination, a place
            where memories are made and cherished.{" "}
            <Link to="/about" className="link">
              Read More...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
