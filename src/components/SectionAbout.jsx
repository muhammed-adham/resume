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
            <span>Turing vision into reality </span>
            <br />
            with code and design
          </h1>
{/*           <p>
            Full-stack developer and UI/UX designer focused on building
            innovative, scalable web applications.
            <br />
            Explore my projects and articles showcasing expertise in React
            and modern web development.
          </p> */}
        </div>
      </section>
    </>
  );
};

export default SectionAbout;
