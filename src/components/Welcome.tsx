import "./welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="text">
        Enjoy our exquisite Nigerian cuisine while experiencing a true feeling
        of taking a good meal. We take pride in our exceptional service,
        world-class views, and fresh and local fare prepared by our chef and
        owner.
      </div>
      <Link to="/reserve">
        <button type="button" className="btn">
          Reserve a Table
        </button>
      </Link>
      <div>
        <img src="/flourish.png" />
      </div>
    </div>
  );
};

export default Welcome;
