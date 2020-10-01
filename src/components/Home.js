import React from "react";
import text from "../assets/text.png";
import hero from "../assets/feature-2.jpg";

function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <img src={text} className="logo" alt="" />
        <nav>
          <ul>
            <li>
              <a href="#DayPass">Day Pass</a>
            </li>
            <li>
              <a href="#Pricing">Pricing</a>
            </li>
            <li>
              <a href="#Training">Personal Training</a>
            </li>
            <li>
              <a href="#Contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <img src="" alt="" />
      </div>
      <div className="content">
        <a href="#Sign Up" className="btn">
          Sign Up Now
        </a>
        <h1>
          Get to know the best
          <br />
          version of yourself
        </h1>
        <p>The Journey Starts here</p>
      </div>
      <img src={hero} className="feature-img" alt="" />
    </div>
  );
}

export default Home;
