import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/photo.jpg`} alt="Nardos Amakele" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Nardos-Amakele" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nardos-amakele" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="/doc/cv.pdf" target="_blank" rel="noopener noreferrer" title="Download CV"><DescriptionIcon /></a>
          </div>
          <h1>Nardos Amakele</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Nardos-Amakele" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nardos-amakele" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="/doc/cv.pdf" rel="noopener noreferrer" title="Download CV"><DescriptionIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;