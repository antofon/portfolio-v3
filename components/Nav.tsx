import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = (): void => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <nav className={shadow ? navStyles.shadow : navStyles.navbar}>
      <div>
        <Image
          src="/assets/images/logo-v2.png"
          alt="logo"
          width="100"
          height="100"
        />
      </div>
      <div>
        <ul className={navStyles.links}>
          <Link href="/">
            <li className={navStyles.link}>Home</li>
          </Link>

          <Link href="#about">
            <li className={navStyles.link}>About</li>
          </Link>

          <Link href="#skills">
            <li className={navStyles.link}>Skills</li>
          </Link>

          <Link href="#projects">
            <li className={navStyles.link}>Projects</li>
          </Link>

          <Link href="#contact">
            <li className={navStyles.link}>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
