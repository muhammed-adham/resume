import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <h3>Muhammed Adham</h3>
        <div className="social-icons">
          <a
            href="https://github.com/muhammed-adham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-adham-a7b9423b9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B91zQriImT02KPdgnMcHN%2BQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
