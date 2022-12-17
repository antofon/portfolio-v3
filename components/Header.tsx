import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import headerStyles from '../styles/Header.module.css';
// import homeStyles from "../styles/Home.module.css"

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <p className={headerStyles.sectionSubtitle}>
        {"Let's"} build something together
      </p>
      <h1 className={headerStyles.sectionTitle}>
        Hi, {"I'm"} <span className={headerStyles.name}>Anwana</span>
        <br />A Front-End Web Developer
      </h1>

      <p className={headerStyles.sectionDescription}>
        {"I'm"} a Front-End Web Weveloper speicializing in building exceptional
        digital experiences. Currently, {"I'm"} focused on building responsive
        front-end applications while learning back-end technologies.
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
          <a href="https://codepen.io/antofon" rel="noopener noreferrer" className={headerStyles.icon}>
            <FaCodepen />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
