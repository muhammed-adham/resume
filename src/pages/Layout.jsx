import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "../components/common/Header";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Layout = () => {
  const [scrollPosition, setScrollPosition] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  // wheel scroll handler
  const wheelScrollHandler = (e) => {
    // prevent the default scroll behavior
    e.preventDefault();
    //get the current scroll position
    // const scrollY = window.scrollY;
    // const vh = window.innerHeight;
    // // define scroll direction
    // const scrollPosition = e.deltaY > 0 ? scrollY + vh : scrollY - vh;
    // // Scroll to the specific position
    // window.scrollTo({
    //   top: scrollPosition,
    //   behavior: "smooth", // Smooth scroll
    // });
  };

  // scroll down handler
  const scrollDownHandler = () => {
    // Check if we're at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      return; // Prevent scrolling down if at the bottom
    }
    setScrollPosition((prev) => {
      const newPosition = prev + window.innerHeight; // Scroll down by one viewport height
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
      return newPosition; // Update state with new position
    });
    setActiveSection((prev) => prev + 1);
  };

  // scroll up handler
  const scrollUpHandler = () => {
    // Check if we're at the top of the page
    if (window.scrollY === 0) {
      return; // Prevent scrolling up if at the top
    }
    setScrollPosition((prev) => {
      const newPosition = prev - window.innerHeight; // Scroll down by one viewport height
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
      return newPosition; // Update state with new position
    });
    setActiveSection((prev) => prev - 1);
  };

  // key scroll handler
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      scrollDownHandler();
    } else if (event.key === "ArrowUp") {
      scrollUpHandler();
    }
  };

  // add arrow keys and mouse scroll wheel event listener
  useEffect(() => {
    window.addEventListener("wheel", wheelScrollHandler, { passive: false });
    // window.addEventListener("keydown", handleKeyDown);
    // Cleanup the event listener on component unmount
    return () => {
      // window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", wheelScrollHandler);
    };
  }, []);

  useEffect(() => {
      window.addEventListener("beforeunload", () => {
        scroll(0, 0);
      })
  });
  return (
    <>
      <div
        className={`owl-container ${activeSection == "0" ? "inactive" : null}`}
      >
        <div
          className={`owl owl-1 ${activeSection == "1" ? "active" : null}`}
        ></div>
        <div
          className={`owl owl-2 ${activeSection == "2" ? "active" : null}`}
        ></div>
        <div
          className={`owl owl-3 ${activeSection == "3" ? "active" : null}`}
        ></div>
        <div
          className={`owl owl-4 ${activeSection == "4" ? "active" : null}`}
        ></div>
      </div>
      <div className="navigator">
        <IoIosArrowUp onClick={scrollUpHandler} />
        <IoIosArrowDown onClick={scrollDownHandler} />
      </div>
      <Header />
      <Home />
    </>
  );
};

export default Layout;
