import React, { useState, useEffect } from "react";
import "../App.css";

function Home() {
  const languages = ["Hello", "नमस्ते", "Hola", "Bonjour", "こんにちは"]; // Add more languages as needed
  const [languageIndex, setLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1500);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [languages.length]);

  const getGreeting = () => {
    return languages[languageIndex];
  };

  return (
    <div className="home">
      <span className="hello">{getGreeting()},</span>
      <span className="name-det">
        I am <span className="name">Puru Sharma</span>
      </span>
      <span className="bio">
        I am a Passionate Frontend Developer with experience in creating
        visually appealing and user-friendly websites.
      </span>
    </div>
  );
}

export default Home;
