import React, { useState } from "react";

function Header({ appTitle, onThemeToggle }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    onThemeToggle(!isDarkMode); // Pass the new theme status to parent component
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{appTitle}</h1>
      <button onClick={toggleTheme} style={styles.button}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

// Inline styles for simplicity
const styles = {
  header: {
    padding: "20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    textAlign: "center",
    borderBottom: "3px solid #ddd",
  },
  title: {
    fontSize: "30px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#333",
    border: "none",
    borderRadius: "4px",
  },
};

export default Header;
