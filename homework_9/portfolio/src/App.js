import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Bored from "./components/Bored";

function App() {
  return (
    <BrowserRouter>
      <div className="header bg-slate-700 h-18 py-2">
        <div className="navigation h-full flex justify-center">
          <Link
            className="bg-slate-500 text-xl text-white py-5 px-10 hover:bg-slate-600"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="bg-slate-500 text-xl text-white py-5 px-10 hover:bg-slate-600"
            to="/about"
          >
            About
          </Link>
          <Link
            className="bg-slate-500 text-xl text-white font py-5 px-10 hover:bg-slate-600"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="bg-slate-500 text-xl text-white py-5 px-10 hover:bg-slate-600"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="bg-slate-500 text-xl text-white py-5 px-10 hover:bg-slate-600"
            to="/bored"
          >
            Bored
          </Link>
        </div>
      </div>
      <div className="content flex bg-slate-300 h-screen justify-center items-center">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bored" element={<Bored />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
