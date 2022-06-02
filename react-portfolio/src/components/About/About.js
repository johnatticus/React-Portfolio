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
          padding: '5px'
        }}
      >
        <div>
        <p>I am John Atticus Hysong. I am studying to become a Full Stack Web Developer. I have worked previously in graphic design (mainly focused in print and layout) and testing consumer Bluetooth enabled products (production vehicle infortainment systems, audio devices, phones).</p>
        <p>Outside of learning web development, I enjoy maintaining planted aquariums and disc golf, although I prefer to call it frolf.</p>
        </div>
      </section>
    
  );
}
