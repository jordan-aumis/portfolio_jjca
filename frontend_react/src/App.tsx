import "./App.scss";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import {
  AboutMe,
  MyWorks,
  Contact,
  Skills,
  MyJourney,
} from "./Components/Content/index";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutMe />
      <MyJourney />
      <MyWorks />
      <Skills />
      <Contact />
    </div>
  );
}
