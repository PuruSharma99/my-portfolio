import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  const skillsData = {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "JSX",
      "Vite React",
      "Redux",
      "HTML",
    ],
    styling: [
      "Tailwind CSS",
      "CSS3",
      "Responsive Design",
      "Ant Design",
      "Material UI",
    ],
    tools: ["VS Code", "Webstorm", "Postman"],
    version_Control: ["Git", "GitHub", "Bitbucket"],
    others: ["Figma", "Zeplin"],
  };

  const projectsData = [
    {
      title: "KJAR Glasses",
      description:
        "KJAR is a dynamic website offering secure and efficient backend services, powered by React.js and Express.js, with a focus on user-friendly features like OTP-based login.",
      image: "/images/glasses.jpg",
      link: "https://kjar.in/",
    },
    {
      title: "World Gallery",
      description:
        "Certainly! Let's embark on a journey to explore some famous places around the globe. Where would you like to begin? :)",
      image: "/images/world.jpg",
      link: "https://world-gallery.vercel.app/",
    },
    {
      title: "Burger Builder",
      description:
        "Craft the ultimate burger experience, a symphony of flavors curated to delight your taste buds. Let's build the burger of your dreams together! :)",
      image: "/images/burger.jpg",
      link: "https://my-burger-app.vercel.app/",
    },
  ];

  const contactsData = [
    {
      link: "https://www.linkedin.com/in/purusharma99/",
      image: "/images/linkedIn.jpg",
      title: "LinkedIn",
    },
    {
      link: "https://github.com/PuruSharma99",
      image: "/images/github.jpg",
      title: "GitHub",
    },
    {
      link: "https://drive.google.com/file/d/1glvd9C2-nIqer4AkzFc7mnncq4XkTev3/view?usp=sharing",
      image: "/images/resume.jpg",
      title: "Resume",
    },
  ];

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
