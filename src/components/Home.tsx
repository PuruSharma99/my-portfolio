import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../App.css";

function Home() {
  const languages = ["Hello", "नमस्ते", "Hola", "Bonjour", "こんにちは"];
  const [languageIndex, setLanguageIndex] = useState(0);
  
  const nameRef = useRef(null); // Reference to animate the name

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1500);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [languages.length]);

  useEffect(() => {
    gsap.fromTo(
      nameRef.current,
      {
        opacity: 0,
        scale: 0.5,
        rotation: 360,
        color: "#fff",
        y: -100
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        color: "#ff6347", // Change color to tomato red for a unique look
        y: 0,
        duration: 1.5,
        ease: "back.out(1.7)" // Smooth bounce effect on scale and rotation
      }
    );
  }); 

  const getGreeting = () => {
    return languages[languageIndex];
  };

  return (
    <div className="home">
      <span className="hello">{getGreeting()},</span>
      <span className="name-det">
        I am <span className="name" ref={nameRef}>Puru Sharma</span>
      </span>
      <span className="bio">
        I am a Passionate Frontend Developer with experience in creating
        visually appealing and user-friendly websites.
      </span>
    </div>
  );
}

export default Home;
