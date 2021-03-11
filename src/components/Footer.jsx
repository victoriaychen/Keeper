import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>Made by Victoria Chen</p>
    </footer>
  );
}

export default Footer;
