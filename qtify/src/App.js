import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Section from './components/Section/Section.jsx';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section name={"top"}/>
      <Section name={"new"} />
    </>
  );
}

export default App;
