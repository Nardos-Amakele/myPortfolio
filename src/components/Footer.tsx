import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Nardos-Amakele" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/nardos-amakele/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://t.me/imscar" target="_blank" rel="noreferrer"><TelegramIcon /></a>
      </div>
      <p>
        <a href="mailto:nardosamakele@gmail.com">@nardosamakele</a> • Available for collaborations
      </p>

    </footer>
  );
}

export default Footer;