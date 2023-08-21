import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
// import { Contact } from "./components/Contact";
import Contact from "./components/Contact";
import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
