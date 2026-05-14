import React from "react";
import SplineCubes from "./SplineCubes";
import { CiShare1 } from "react-icons/ci";

const Banner = () => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = './src/assets/MuhammedAdham_FullStack_UX_UI_Developer.docx.pdf'; // Path to your resume file
    link.target = '_blank'; // Open in a new tab
    // link.download = 'MuhammedAdham_FullStack_UX_UI_Developer.docx.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="main-banner">
        <div className="title">
          <h1 className="hidden">muhammed adham</h1>
          <h2 className="hidden">Full-Stack developer</h2>
          <p className="hidden">
            Highly motivated and results-oriented UX-UI Designer and Full Stack
            Web Developer with a passion for creating user-centric and visually
            appealing web experiences.
          </p>
          <div className="btns-container hidden">
            <div className="btn-resume" onClick={handleDownload}>
              resume
              <CiShare1 />
            </div>
          </div>
        </div>
        <SplineCubes />
        <div
          className="block"
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            backgroundColor: "black",
            width: "180px",
            height: "80px",
          }}
        ></div>
      </div>
    </>
  );
};

export default Banner;
