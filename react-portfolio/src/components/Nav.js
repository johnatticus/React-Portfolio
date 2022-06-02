import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav>
         <div style={linkStyle}>
          <a href="#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Skills</a>
        </div>
        <div style={linkStyle}>
          <a href="#projects">Projects</a>
        </div>
        <div style={linkStyle}>
          <a href="#resume">Resume</a>
        </div>
    </nav>
  );
}
