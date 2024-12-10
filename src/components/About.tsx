import React from "react";
import "../App.css";

// Define props interface
interface AboutProps {
  name: string;
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="about">
      <span className="hello">Hello,</span>
      <span className="name-det">
        I am <span className="name">{props.name}</span>
      </span>
      <div className="about-det">
        <div className="abt-det">
          Currently working as a Front End Developer at{" "}
          <u>Indus EyeCare Solutions LLP</u>, where I focus on advancing my
          skills and expanding my expertise.
        </div>
        <div className="abt-det">
          I'm all about making websites look cool and work smoothly. I love
          turning designs into real, clickable things on the internet. With
          over 1.5 years+ of experience with React.js and JavaScript.
        </div>
        <div className="abt-det">
          My code is more than syntax; it's a language that speaks to users,
          creating web experiences that seamlessly bridge the gap between
          technology and human connection.
        </div>
        <div className="abt-det">
          With a keyboard as my paintbrush and a browser as my canvas, I
          transform visions into digital reality, one meticulously written line
          of code at a time.
        </div>
      </div>
    </div>
  );
};

export default About;
