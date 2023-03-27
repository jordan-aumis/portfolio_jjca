import "./App.scss";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { AboutMe, MyWorks, Contact, Skills } from "./Components/Content/index";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutMe />
      <MyWorks />
      <Skills />
      <Contact />
    </div>
  );
}
