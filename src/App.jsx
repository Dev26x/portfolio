import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, 
  Navbar, Tech, Works } from './components';
import Stars from "./components/canvas/Stars"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="relatve z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover 
          bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
