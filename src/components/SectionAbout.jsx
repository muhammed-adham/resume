import React, { useEffect } from "react";

const SectionAbout = () => {
    // flashlight cursor
    useEffect(() => {
      // Add event listener for mouse movement
      window.addEventListener("mousemove", (event) => {
        // Update cursor position based on mouse coordinates
        document.documentElement.style.setProperty(
          "--pointerX",
          event.clientX + "px"
        );
        document.documentElement.style.setProperty(
          "--pointerY",
          event.clientY + "px"
        );
      });
      // Cleanup function to remove the event listener on unmount
      return () => {
        window.removeEventListener("mousemove", (event) => {
          // Update cursor position based on mouse coordinates
          document.documentElement.style.setProperty(
            "--pointerX",
            event.clientX + "px"
          );
          document.documentElement.style.setProperty(
            "--pointerY",
            event.clientY + "px"
          );
        });
      };
    }, []);

  return (
    <>
      <section
        className=" about-section"
      >
        <div className="content-container">
          <h1 className="hidden">
            Turing <span>vision into reality </span>with code and design
          </h1>
          <p className="hidden">
            As a skilled full-stack developer and UX-UI designer,, I am
            dedicated to turning ideas into innovative web applications,
            <br /> Explore my latest projects and articles, showcasing my
            expertise in React.js and web development{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionAbout;
