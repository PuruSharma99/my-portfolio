import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../App.css";

// Define the prop types
interface SkillsProps {
  headLine?: string; 
  skillHead: string;
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ headLine, skillHead, skills }) => {
  const skillsRef = useRef<HTMLDivElement | null>(null); // Ref to apply animation to the skill list

  useEffect(() => {
    // GSAP animation for the typewriter effect on the skills list
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.children, // Target each skill element
        { opacity: 0, x: -50 }, // Starting state (hidden and slightly left)
        { 
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1, // Adds a delay between each skill animation
          ease: "power2.out" // Smooth ease-out for each skill
        }
      );
    }
  }, [skills]); // Runs every time the skills prop changes

  return (
    <div className="skills">
      {headLine && <div className="bio">{headLine}</div>}
      <div className="my-skills">
        <div className="skl-head">{skillHead}</div>
        <div className="skills-list" ref={skillsRef}>
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              ► {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
