import Introduction from "./components/Introduction";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import SlideShow from "./components/Swiper";
import About from "./components/About";

const Home = () => {
  return (
    <>
      <Introduction />
      <Welcome />
      <Menu />
      <SlideShow />
      <About />
    </>
  );
};

export default Home;
