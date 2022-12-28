import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={headerStyles.container}>
      {/* <p className={headerStyles.sectionSubtitle}>
        Creative, Web Developer, Musician
      </p> */}
      {/* <h1 className={headerStyles.sectionTitle}>
        Hi, {"I'm"} <span className={headerStyles.name}>Anwana</span>
        <br />A Front-End Web Developer
      </h1> */}
      
      <h1 className={headerStyles.sectionTitle}>
        {/* Hi! {"I'm"} <span className={headerStyles.name}>Anwana</span> */}
        {/* Oakland-based creative crafting beautiful web experiences focused on <span className={headerStyles.name}>accessibility</span> and <span className={headerStyles.name}>purpose</span> */}
        Oakland-based web developer devoted to crafting <span className={headerStyles.name}>accessible</span> and <span className={headerStyles.name}>purposeful</span> web experiences. 
      </h1>

      <p className={headerStyles.sectionDescription}>
        {/* {"I'm"} a Front-End Web Developer specializing in building exceptional
        digital experiences. Currently, {"I'm"} focused on building responsive
        front-end applications while learning back-end technologies. */}
        
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
