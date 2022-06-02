import React from 'react';
import './About.css'

export default function About() {
  const linkStyle = { border: '1px black', padding: '5px' };
  const aboutStyle = { fontFamily: 'Arial' }

  return (
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        I am John. I am becoming Full Stack Developer. Wow.
      </section>
    
  );
}
