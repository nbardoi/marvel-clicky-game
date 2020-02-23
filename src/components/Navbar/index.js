import React from "react";
import "./style.css";

function Navbar({clickMessage, score, topScore}) {
  return (
      <nav className="navbar fixed-top navbar-light bg-secondary">
      <a className="navbar-brand text-center"  id="clickgame" href="/">Clicky Game!</a>

      <li className="navbar-brand text-center" id="message">{clickMessage}</li>

      <li className="navbar-brand text-center" id="score">Score: {score} | High Score: {topScore}</li>

      </nav>
  );
}

export default Navbar;