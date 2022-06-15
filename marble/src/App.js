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

function App() {
  
  return (
    <div className="App">
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
