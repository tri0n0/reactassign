import React from 'react';
import chikkiImage from './Chikki.JPG';  // Importing the image

function Introduction() {
  return (
    <section id="introduction">
      <img 
        src={chikkiImage}  // Use the imported image here
        alt="Debasmita Sinha" 
        style={{ width: '200px', borderRadius: '10%' }}
      />
      <h2>About Me</h2>
      <p>Hi, I'm Debasmita Sinha, from Halihali, Dhalai, Tripura.</p>
    </section>
  );
}

export default Introduction;
