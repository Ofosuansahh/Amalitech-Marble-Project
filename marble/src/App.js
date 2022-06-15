import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Works from "./components/Works/Works";
import "./App.css";
import Looks from "./components/Looks/Looks";
import Reverse from "./components/Reverse/Reverse";
import Newsletter from "./components/Newsletter/Newsletter";
import Business from "./components/Business/Business";
import Vacancies from "./components/Vacancies/Vacancies";
import ReachUs from "./components/ReachUs/ReachUs";
import Problem from "./components/Problem/Problem";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import FooterSub from "./components/FooterSub/FooterSub";
// import { useContext } from "react";
// import { themeContext } from "./Context";
function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      // style={{
      //   background: darkMode ? "black" : "",
      //   color: darkMode ? "white" : "",
      // }}
    >
      <Navbar />
      <Intro />
      <Works />
      <Looks />
      <Reverse />
      <Newsletter />
      <Business />
      <Vacancies />
      <ReachUs />
      <Problem />
      <Contacts />
      <Footer />
      <FooterSub />
    </div>
  );
}

export default App;
