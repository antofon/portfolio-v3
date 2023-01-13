import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import mobileNavStyles from '../styles/MobileNav.module.css';

const MobileNav = ({
  closeMobileMenu,
  isMobileMenuClosed,
  setIsMobileMenuClosed,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: any) => {
  const menuLinkClicked = (e: any) => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileMenuClosed(!isMobileMenuClosed);
    closeMobileMenu();
    console.log('Event', e.target.value);
  };

  return (
    <>
      {isMobileMenuClosed ? null : (
        <div className={mobileNavStyles.firstLevel}>
          <div className={mobileNavStyles.secondLevel}>
            <div className={mobileNavStyles.thirdLevel}>
              <Image
                src="/assets/images/logo-v2.png"
                alt="logo"
                width="100"
                height="100"
                className={mobileNavStyles.logo}
                priority={true}
              />
              <div className={mobileNavStyles.menuCloseContainer}>
                <button aria-label="Close" onClick={closeMobileMenu} className={mobileNavStyles.menuClose}>
                  <RxCross2 size={25} aria-hidden="true"/>
                </button>
              </div>
            </div>
            <p className={mobileNavStyles.menuTagline}>Menu</p>
            <hr />
            <ul
              className={mobileNavStyles.links}
              id="mobilemenubutton"
              role="menu"
              aria-labelledby="mobilemenubutton"
            >
              <li role="presentation">
                <Link
                  href="/"
                  className={mobileNavStyles.link}
                  onClick={menuLinkClicked}
                >
                  Home
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="/#about"
                  className={mobileNavStyles.link}
                  onClick={menuLinkClicked}
                >
                  About
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="/#skills"
                  className={mobileNavStyles.link}
                  onClick={menuLinkClicked}
                >
                  Skills
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="/#experience"
                  className={mobileNavStyles.link}
                  onClick={menuLinkClicked}
                >
                  Experience
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="/#contact"
                  className={mobileNavStyles.link}
                  onClick={menuLinkClicked}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className={mobileNavStyles.mobileConnectContainer}>
              <p className={mobileNavStyles.mobileConnect}>{"Let's"} Connect</p>
              <div className={mobileNavStyles.socials}>
                <a
                  href="https://www.linkedin.com/in/anwanantofon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mobileNavStyles.icon}
                >
                  <span aria-hidden="true">
                    <FaLinkedinIn />
                  </span>
                  <span className={mobileNavStyles.visuallyHidden}>
                    Social mobile link to LinkedIn account
                  </span>
                </a>
                <a
                  href="https://github.com/antofon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mobileNavStyles.icon}
                >
                  <span aria-hidden="true">
                    <FaGithub />
                  </span>
                  <span className={mobileNavStyles.visuallyHidden}>
                    Social mobile link to GitHub account
                  </span>
                </a>
                <a
                  href="https://codepen.io/antofon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mobileNavStyles.icon}
                >
                  <span aria-hidden="true">
                    <FaCodepen />
                  </span>
                  <span className={mobileNavStyles.visuallyHidden}>
                    Social mobile link to CodePen account
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
