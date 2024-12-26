import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const items = ["React", "Vue", "Angular", "Svelte"];

  // Toggle theme function to change the mode (dark or light)
  const handleThemeToggle = (themeStatus) => {
    setIsDarkMode(themeStatus); // Update the theme state
  };

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? "#333" : "#fff", 
      color: isDarkMode ? "#fff" : "#000", 
      minHeight: "100vh",
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}>
      <Header appTitle="Frontend Frameworks" onThemeToggle={handleThemeToggle} />
      <Content title="Popular Frameworks" items={items} />
      <Footer appName="My React App" creator="Your Name" />
    </div>
  );
}

export default App;
