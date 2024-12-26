import React from "react";

function Footer({ appName, creator }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {currentYear} {appName}. Created by {creator}.
      </p>
    </footer>
  );
}

// Inline styles for simplicity
const styles = {
  footer: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    textAlign: "center",
    marginTop: "20px",
  },
  text: {
    fontSize: "14px",
  },
};

export default Footer;

