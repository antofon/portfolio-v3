import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.sectionTitle}>
        Holistic web developer devoted to crafting{' '}
        <span className={headerStyles.name}>accessible</span> and{' '}
        <span className={headerStyles.name}>purposeful</span> web experiences.
      </h1>
      <div className={headerStyles.socials}>
        <a
          href="https://www.linkedin.com/in/anwanantofon/"
          target="_blank"
          rel="noopener noreferrer"
          className={headerStyles.icon}
        >
          <span aria-hidden="true">
            <FaLinkedinIn />
          </span>
          <span className={headerStyles.visuallyHidden}>
            Social link to LinkedIn account
          </span>
        </a>
        <a
          href="https://github.com/antofon"
          target="_blank"
          rel="noopener noreferrer"
          className={headerStyles.icon}
        >
          <span aria-hidden="true">
            <FaGithub />
          </span>
          <span className={headerStyles.visuallyHidden}>Social link to GitHub account</span>
        </a>
        <a
          href="https://codepen.io/antofon"
          target="_blank"
          rel="noopener noreferrer"
          className={headerStyles.icon}
        >
          <span aria-hidden="true">
            <FaCodepen />
          </span>
          <span className={headerStyles.visuallyHidden}>
            Social link to CodePen account
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
