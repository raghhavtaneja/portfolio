import { Navbar, Hero, Experience, Skills, Projects } from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default App;
