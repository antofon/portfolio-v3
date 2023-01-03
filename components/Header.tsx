import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.sectionTitle}>
        Oakland-based web developer devoted to crafting{' '}
        <span className={headerStyles.name}>accessible</span> and{' '}
        <span className={headerStyles.name}>purposeful</span> web experiences.
      </h1>
      <div className={headerStyles.socials}>
        <div>
          <a
            href="https://www.linkedin.com/in/anwanantofon/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.icon}
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/antofon"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.icon}
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/antofon"
            rel="noopener noreferrer"
            className={headerStyles.icon}
          >
            <FaCodepen />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
