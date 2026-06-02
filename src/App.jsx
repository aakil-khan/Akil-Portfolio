import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import ScrollTop from "./components/ScrollTop";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";
import TechStack from "./Components/TechStack";


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <TechStack/>
    <Stats/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    <ScrollTop/>
     
    </>
  );
}

export default App;