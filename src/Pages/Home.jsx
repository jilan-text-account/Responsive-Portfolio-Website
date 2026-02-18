import React from "react";
import { Link } from "react-router";
import reactLogo from "../assets/react.svg";

function Home() {
  return (
    <div className="home-container">
      {/* Profile Image */}
      <div className="home-image">
        <img src={reactLogo} alt="Profile" />
      </div>

      {/* Description */}
      <div className="home-content">
        <h1>
          Hi, I'm <span>Naik jillani</span>
        </h1>
        <h3>React Developer</h3>
        <p>
          I am a passionate front-end developer specializing in React.js. I love
          building responsive, user-friendly, and modern web applications with
          clean UI and efficient code.
        </p>
      </div>
      <button className="next-btn">
        <Link to="/Skills">Next</Link>
      </button>
    </div>
  );
}

export default Home;
