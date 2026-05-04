import React, { useEffect } from "react";
import Banner from "../components/Banner";
import SectionAbout from "../components/SectionAbout";
import SectionBio from "../components/SectionBio";
import SectionProjects from "../components/SectionProjects";
import SectionContact from "../components/SectionContact";

const Home = () => {
  
  // animation
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.forEach((el) => observe.observe(el));

    // Cleanup observer on component unmount
    return () => {
      hiddenElements.forEach((el) => observe.unobserve(el));
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      <Banner />
      <SectionAbout />
      <SectionBio/>
      <SectionProjects/>
      <SectionContact/>
    </>
  );
};

export default Home;
