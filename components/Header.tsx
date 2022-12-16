import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import headerStyles from '../styles/Header.module.css';
// import homeStyles from "../styles/Home.module.css"

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <p className={headerStyles.description}>
        {"Let's"} build something together
      </p>
      <h1 className={headerStyles.title}>
        Hi, {"I'm"} <span className={headerStyles.name}>Anwana</span>
        <br />A Front-End Web Developer
      </h1>

      <p>
        {"I'm"} a Front-End Web Weveloper speicializing in building excepiotnal
        digital experiences. Currently, {"I'm"} focused on building resonseive
        front-end appliation while learning back-end technologiess.
      </p>

      <div className={headerStyles.socials}>
        <div >
          <a
            href="https://www.linkedin.com/in/anwanantofon/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.icon}>
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/antofon"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.icon}>
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="mailto:anwanantofon@gmail.com" rel="noopener noreferrer" className={headerStyles.icon}>
            <FaRegEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;