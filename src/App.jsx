import { Navbar, Hero, Experience, Skills, Projects } from "./components";

const App = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default App;
