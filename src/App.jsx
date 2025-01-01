import { BrowserRouter } from "react-router-dom";

import { Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, About } from "./components";
import SectionWrapper from "./hoc/SectionWrapper"; // Import SectionWrapper

const WrappedHero = SectionWrapper(Hero, "hero", true, false); // Hero is the first section
const WrappedAbout = SectionWrapper(About, "about", false, false); // About is the last section
const WrappedWorks = SectionWrapper(Works, "hero", false, true); // Hero is the first section

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <WrappedHero /> {/* Wrapped Hero */}
        </div>
        <WrappedAbout /> {/* Wrapped About */}
        <Experience />
        <Tech />
        <WrappedWorks />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
