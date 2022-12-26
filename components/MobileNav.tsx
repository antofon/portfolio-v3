import React, { useState, useEffect } from 'react';
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
    <div>
      {isMobileMenuClosed ? null : (
        <div className={mobileNavStyles.firstLevel}>
          <div
          // className={mobileNavStyles.secondLevel}
          >
            <div className={mobileNavStyles.thirdLevel}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Image
                  src="/assets/images/logo-v2.png"
                  alt="logo"
                  width="100"
                  height="100"
                  className={mobileNavStyles.logo}
                  priority={true}
                />
                <div className={mobileNavStyles.menuClose}>
                  <RxCross2 onClick={closeMobileMenu} size={25} />
                </div>
              </div>
              <div>
                <p className={mobileNavStyles.menuTagline}>Menu</p>
                <hr />

                <ul className={mobileNavStyles.links}>
                  <Link
                    href="/"
                    className={mobileNavStyles.link}
                    onClick={menuLinkClicked}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    href="/#about"
                    className={mobileNavStyles.link}
                    onClick={menuLinkClicked}
                  >
                    <li>About</li>
                  </Link>
                  <Link
                    href="/#skills"
                    className={mobileNavStyles.link}
                    onClick={menuLinkClicked}
                  >
                    <li>Skills</li>
                  </Link>
                  <Link
                    href="/#experience"
                    className={mobileNavStyles.link}
                    onClick={menuLinkClicked}
                  >
                    <li>Experience</li>
                  </Link>
                  <Link
                    href="/#contact"
                    className={mobileNavStyles.link}
                    onClick={menuLinkClicked}
                  >
                    <li>Contact</li>
                  </Link>
                </ul>
              </div>
              <div className={mobileNavStyles.mobileConnectContainer}>
                <p className={mobileNavStyles.mobileConnect}>
                  {"Let's"} Connect
                </p>
                <div className={mobileNavStyles.socials}>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/anwanantofon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={mobileNavStyles.icon}
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/antofon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={mobileNavStyles.icon}
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://codepen.io/antofon"
                      rel="noopener noreferrer"
                      className={mobileNavStyles.icon}
                    >
                      <FaCodepen />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
