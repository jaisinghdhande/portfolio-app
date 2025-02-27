import React from "react";
import "./Hero.css";
import profilePicture from "../../assets/jaisingh_dhande.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="profile-picture">
        <img src={profilePicture}></img>
      </div>
      <h1>
        <span>I am Jaisingh Dhande,</span>
        FullStack Developer based in India.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi
        dolore repellat expedita sapiente, aspernatur, molestias dignissimos
        repudiandae fuga fugit quisquam maxime, reiciendis praesentium quos
        nesciunt reprehenderit veritatis nam ratione!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
