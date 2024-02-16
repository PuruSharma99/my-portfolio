import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const skillsData = {
  frontend: ["React.js", "JSX", "JavaScript", "Redux", "HTML"],
  styling: ["Tailwind CSS", "CSS3", "Responsive Design"],
  tools: ["VS Code", "Webstorm", "Postman"],
  version_Control: ["Git", "GitHub", "Bitbucket"],
  others: ["Zeplin"],
};

const projectsData = [
  {
    title: "World Gallery",
    description:
      "Certainly! Let's embark on a journey to explore some famous places around the globe. Where would you like to begin? :)",
    image: "./assets/world.jpg",
    link: "https://world-gallery.vercel.app/",
  },
  {
    title: "Burger Builder",
    description:
      "Craft the ultimate burger experience, a symphony of flavors curated to delight your taste buds. Let's build the burger of your dreams together! :)",
    image: "./assets/burger.jpg",
    link: "https://my-burger-app.vercel.app/",
  },
];

const contactsData = [
  {
    link: "https://www.linkedin.com/in/purusharma99/",
    image: "./assets/linkedIn.jpg",
    title: "LinkedIn",
  },
  {
    link: "https://github.com/PuruSharma99",
    image: "./assets/Github.jpg",
    title: "GitHub",
  },
  {
    link: "https://drive.google.com/file/d/1ab-kSO9ti2H8L0GZ57mRwNLXBl61IdIm/view?usp=sharing",
    image: "./assets/Resume.jpg",
    title: "Resume",
  },
];

function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const renderSkillsComponent = (skillCategory) => {
    const formattedSkillHead = skillCategory
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <Skills
        headLine={
          skillCategory === "frontend"
            ? "Technologies & Languages I am Skilled & Experienced in"
            : undefined
        }
        skillHead={formattedSkillHead}
        skills={skillsData[skillCategory]}
      />
    );
  };

  return (
    <div className="app-container">
      <Navbar onButtonClick={handleButtonClick} />
      <div className="body-container">
        {activeComponent === "Home" && <Home />}
        {activeComponent === "About" && <About name="Puru Sharma" />}
        {activeComponent === "Skills" && renderSkillsComponent("frontend")}
        {activeComponent === "Skills" && renderSkillsComponent("styling")}
        {activeComponent === "Skills" && renderSkillsComponent("tools")}
        {activeComponent === "Skills" &&
          renderSkillsComponent("version_Control")}
        {activeComponent === "Skills" && renderSkillsComponent("others")}
        {activeComponent === "Projects" && <Projects projects={projectsData} />}
        {activeComponent === "Contact" && <Contact contacts={contactsData} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
