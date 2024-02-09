import React from "react";
import "../App.css";

function Skills({ headLine, skillHead, skills }) {
  return (
    <div className="skills">
      <div className="bio">{headLine}</div>
      <div className="my-skills">
        <div className="skl-head">{skillHead}</div>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            ► {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
