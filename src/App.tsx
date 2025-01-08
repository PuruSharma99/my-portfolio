import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Define types for the data structures
interface SkillsData {
  frontend: string[];
  styling: string[];
  tools: string[];
  version_Control: string[];
  others: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ContactData {
  link: string;
  image: string;
  title: string;
}

// Define the type for active components
type ComponentName = "Home" | "About" | "Skills" | "Projects" | "Contact";

const skillsData: SkillsData = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "JSX", "Vite React", "Redux", "HTML"],
  styling: ["Tailwind CSS", "CSS3", "Responsive Design", "Ant Design", "Material UI"],
  tools: ["VS Code", "Webstorm", "Postman"],
  version_Control: ["Git", "GitHub", "Bitbucket"],
  others: ["Figma", "Zeplin"],
};

const projectsData: Project[] = [
  {
    title: "KJAR Glasses",
    description:
      "KJAR is a dynamic website offering secure and efficient backend services, powered by React.js and Express.js, with a focus on user-friendly features like OTP-based login.",
    image: "/src/assets/glasses.jpg",
    link: "https://kjar.in/",
  },
  {
    title: "World Gallery",
    description:
      "Certainly! Let's embark on a journey to explore some famous places around the globe. Where would you like to begin? :)",
    image: "/src/assets/world.jpg",
    link: "https://world-gallery.vercel.app/",
  },
  {
    title: "Burger Builder",
    description:
      "Craft the ultimate burger experience, a symphony of flavors curated to delight your taste buds. Let's build the burger of your dreams together! :)",
    image: "/src/assets/burger.jpg",
    link: "https://my-burger-app.vercel.app/",
  },
];

const contactsData: ContactData[] = [
  {
    link: "https://www.linkedin.com/in/purusharma99/",
    image: "/src/assets/linkedIn.jpg",
    title: "LinkedIn",
  },
  {
    link: "https://github.com/PuruSharma99",
    image: "/src/assets/Github.jpg",
    title: "GitHub",
  },
  {
    link: "https://drive.google.com/file/d/1HuGIwPix8qHJY8GXoBNjwTULUi7CWrka/view?usp=sharing",
    image: "/src/assets/Resume.jpg",
    title: "Resume",
  },
];

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentName>("Home");

  const handleButtonClick = (component: ComponentName): void => {
    setActiveComponent(component);
  };

  const renderSkillsComponent = (skillCategory: keyof SkillsData) => {
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
