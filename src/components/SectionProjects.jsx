import React, { useEffect } from "react";
import { FaFigma, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";

const SectionProjects = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card")),
      {
        max: 25,
        speed: 300,
        glare: true,
        "glare-prerender": true,
      };
  }, []);

  return (
    <>
      <section className="projects-section">
        <h1 className="projects-title hidden">project</h1>
        <div className="cards-container hidden">
          <a
            href="https://theme-switch-eosin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="card"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
            >
              <div className="logo">
                <FaSass />
              </div>
              <div className="pic">
                <img src="./src/assets/images/artist-pp.jpg" alt="" />
              </div>
              <div className="title">Theme Transitions.</div>
              <div className="desc">Dynamic theme switch animation.</div>
            </div>
          </a>
          <a
            href="https://ogme.store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="card"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
            >
              <div className="logo">
                <FaReact />
                <FaNodeJs />
              </div>
              <div className="pic">
                <img src="./src/assets/images/ogme.png" alt="" />
              </div>
              <div className="title">E-commerce web app.</div>
              <div className="desc">
                Crafting a responsive web app with React.js, Node.js
              </div>
            </div>
          </a>
          <a
            href="https://www.figma.com/design/jItNuBwBEYm97WveEm6JPL/Silver-E-commerce-Web-Application?m=auto&t=J9C50i7bcrZ44aHf-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="card"
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
            >
              <div className="logo">
                <FaFigma />
              </div>
              <div className="pic">
                <img src="/src/assets/images/silver.png" alt="" />
              </div>
              <div className="title">UX-UI</div>
              <div className="desc">
                Visually appealing and user-friendly interface.
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default SectionProjects;
