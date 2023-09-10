import { Link } from "react-router-dom";
import Reserve from "./components/reserve";
import "./reservation.css";
import { useDataStore } from "./components/dataStore";
import { useState } from "react";

const Reservation = () => {
  const { state } = useDataStore();
  const [valid, setValid] = useState(false);
  const checkValid = valid ? "/reserve/complete" : "/reserve";

  // validate
  function validate(): void {
    if (state.date && state.time) {
      setValid(true);
    }
  }

  return (
    <div className="reserveContainer">
      <div className="reservationHeader">
        <div>
          <img src="/ungwalogo.png" alt="" />
        </div>
        <div>
          <h2>Make a reservation</h2>
          <p>
            To help us find the best table for you, select the preferred party
            size, date, and time of your reservation.
          </p>
        </div>
      </div>
      <Reserve />

      <div className="reservation">
        <Link to={checkValid}>
          <button type="button" onClick={validate}>
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
