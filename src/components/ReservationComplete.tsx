import { useState } from "react";
import "./completereservation.css";
import { useDataStore } from "./dataStore";
import { Link } from "react-router-dom";

const ReservationComplete = () => {
  const { state, dispatch } = useDataStore();

  // formValidate
  const [valid, setValid] = useState(false);
  const isPath = valid ? "/reserve/reserved" : "/reserve/complete";

  // validate
  function validate(): void {
    if (
      state.email &&
      state.firstName &&
      state.secondName &&
      state.phoneNumber
    ) {
      setValid(true);
    }
  }

  return (
    <div className="completeReservation">
      <div className="reserveLogo">
        <img src="/ungwalogo.png" />
      </div>
      <div className="reserveDetails">
        <div className="reserveLeft">
          <h3>Complete Your Reservation</h3>
          <p>Please fill in your details:</p>
          <form>
            <div className="firstInput">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                autoComplete="true"
                onChange={(e) =>
                  dispatch({ type: "FIRST_NAME", payload: e.target.value })
                }
              />
              <input
                type="text"
                name="secondName"
                placeholder="Second Name"
                autoComplete="true"
                onChange={(e) =>
                  dispatch({ type: "SECOND_NAME", payload: e.target.value })
                }
              />
            </div>
            <div className="secondInput">
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                autoComplete="true"
                onChange={(e) =>
                  dispatch({ type: "PHONE_NUMBER", payload: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="true"
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
            <Link to={isPath} onClick={validate}>
              <button typeof="button">Complete Reservation</button>
            </Link>
          </form>
        </div>
        <section className="reserveSummary">
          <p>Your table will be held for you for 30 minutes.</p>
          <article>
            <p>Reservation details:</p>
            <p>Date: {`${state.date}  ${" "} ${state.time}`} </p>
            <p>{state.size} Guest</p>
            <p>Gbagalape Phase1, Nyanya FCT Abuja.</p>
            <p>
              <Link to="/reserve">
                <u>change</u>
              </Link>
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default ReservationComplete;
