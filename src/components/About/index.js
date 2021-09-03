import React from 'react';
import coverImage from '../../Assets/cover/cover-image.png';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Let's Talk About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
        <p>
          Hi there! I'm Dillon, a NJ English Teacher turned Web Developer. Please enjoy viewing some of the projects I've worked on in the past few months! 
        </p>
      </div>
        </section>
    )
}

export default About;