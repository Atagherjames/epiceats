import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import AboutUngwa from "./AboutUngwa";
import Reservation from "./Reservation";
import Reserved from "./Reserved";
import ReservationComplete from "./components/ReservationComplete";
import Lunch from "./Menus/Lunch";
import ScrollToTop from "./ScrollRestoration";
import TakeOut from "./Menus/TakeOut";
import Kids from "./Menus/KIds";
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
        <Route path="/menu/lunch" element={<Lunch />} />
        <Route path="/menu/kids" element={<Kids />} />
        <Route path="/menu/takeout" element={<TakeOut />} />
        <Route path="/reserve/reserved" element={<Reserved />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
