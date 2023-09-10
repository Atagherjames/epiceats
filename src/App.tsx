import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import AboutUngwa from "./AboutUngwa";
import Reservation from "./Reservation";
import Reserved from "./Reserved";
import ReservationComplete from "./components/ReservationComplete";
import ScrollToTop from "./ScrollRestoration";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUngwa />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/reserve/complete" element={<ReservationComplete />} />
        <Route path="/reserve/reserved" element={<Reserved />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
