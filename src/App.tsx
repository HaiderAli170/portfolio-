import Home from "./components/home/home";
import NavBar from "./components/navbar/navbar";
import { motion, useScroll } from "framer-motion";
import "./style.css";
import Example from "./components/work/work";
import Skills from "./components/skills/skill";
import About from "./components/about/about";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress ,originX: 0 }} />
      <div>
        <NavBar />
        <Home />
        <Example />
        <Skills/>
        <About/>
      </div>
    </>
  );
}

export default App;
