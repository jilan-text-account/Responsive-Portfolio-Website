import React from "react";
import { Link } from "react-router";

import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ReactIcon from "@mui/icons-material/IntegrationInstructions";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";

function SkillsPage() {
  return (
    <div className="main">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-subtitle">
          Full Stack Web Developer — Frontend, Backend & Tools
        </p>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skills-card">
            <h2>Frontend</h2>
            <div className="skills-list">
              <div className="skill-item">
                <HtmlIcon /> HTML5
              </div>
              <div className="skill-item">
                <CssIcon /> CSS3
              </div>
              <div className="skill-item">
                <JavascriptIcon /> JavaScript
              </div>
              <div className="skill-item">
                <ReactIcon /> React.js
              </div>
              <div className="skill-item">
                <CodeIcon /> Material UI
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skills-card">
            <h2>Backend</h2>
            <div className="skills-list">
              <div className="skill-item">
                <CodeIcon /> Node.js
              </div>
              <div className="skill-item">
                <BuildIcon /> Express.js
              </div>
              <div className="skill-item">
                <CloudIcon /> REST APIs
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="skills-card">
            <h2>Database</h2>
            <div className="skills-list">
              <div className="skill-item">
                <StorageIcon /> PostgreSQL
              </div>
              <div className="skill-item">
                <StorageIcon /> MongoDB
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skills-card">
            <h2>Tools & DevOps</h2>
            <div className="skills-list">
              <div className="skill-item">
                <CodeIcon /> Git & GitHub
              </div>
              <div className="skill-item">
                <BuildIcon /> VS Code
              </div>
              <div className="skill-item">
                <CloudIcon /> Docker (Basic)
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="next-btn">
        <Link to="/Projects">Next</Link>
      </button>
    </div>
  );
}

export default SkillsPage;
