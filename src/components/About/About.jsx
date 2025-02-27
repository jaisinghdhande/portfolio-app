import React from "react";
import "./About.css";
import aboutImage from "../../assets/jaisingh_dhande.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">About Me</div>
      <div className="about-section">
        <div className="image-container">
          <img src={aboutImage}></img>
        </div>
        <div className="about-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            placeat, asperiores autem enim nisi eum, architecto maxime explicabo
            aut voluptatibus error aliquid, porro delectus facilis aperiam cum
            eaque. Natus, id?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
