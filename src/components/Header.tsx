import { useState, useEffect } from "react";
import Links from "./Links";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleChildData = (data: boolean) => {
    setOpen(data);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const className: string = scrolled ? `header scroll` : `header`;
  return (
    <>
      <header className={className}>
        <div className="headerContainer">
          <div className="headerLeft">
            <img src="/ungwalogo.png" alt="ungwa" />
          </div>
          <div className="headerRight">
            <div className="reserveCotainer">
              <h3>
                <Link to="/reserve/reserved">Reservation</Link>
              </h3>
            </div>
            <div className="hamburger">
              <Hamburger duration={0.4} toggle={setOpen} toggled={isOpen} />
            </div>
          </div>
        </div>
      </header>
      <div>{isOpen && <Links sendDataToParent={handleChildData} />}</div>
    </>
  );
};

export default Header;
