import "./reserved.css";
import { useDataStore } from "./components/dataStore";
import { Link } from "react-router-dom";

const Reserved = () => {
  const { state } = useDataStore();

  let empty = "empty";
  let notEmpty = "hidempty";

  if (state.date != "" && state.firstName != "") {
    empty = "contain";
    notEmpty = "showempty";
  }

  return (
    <div className="reservedContainer">
      <div className={empty}>YOU HAVE NO RESERVATION</div>
      <section className={notEmpty}>
        <p>You have a table reserved for 30 minutes</p>
        <article>
          <p>
            <strong>Reservation details: </strong>{" "}
          </p>
          <p>{`${state.date} ${" "} ${state.time}`}</p>
          <p>number of guest: {state.size}</p>
          <p>Gbagalape Phase1, Nyanya FCT Abuja.</p>
          <p>
            <Link to="/reserve">
              <u>change</u>
            </Link>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Reserved;
