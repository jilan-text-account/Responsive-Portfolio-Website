import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="app-container">
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </div>

        <ul className="nav-list">
          <li>
            <Link to="./Home" className="link">
              <HomeIcon className="icon" />
              <span className="label">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Skills" className="link">
              <InfoIcon className="icon" />
              <span className="label">Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="link">
              <SettingsIcon className="icon" />
              <span className="label">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="link">
              <ContactMailIcon className="icon" />
              <span className="label">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={isOpen ? "container" : "active-container"}>
        <Routes className="main">
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
