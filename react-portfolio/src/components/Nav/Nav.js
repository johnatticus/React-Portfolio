import React from 'react';
import './Nav.css'

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav>
         <div style={linkStyle}>
          <a href="#about">About</a> | <a href="#skills">Skills</a> | <a href="#projects">Projects</a> | <a href="#resume">Resume</a>
        </div>
    </nav>
  );
}
