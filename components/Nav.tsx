import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div >
        <Image
          src="/../public/assets/images/logo-v2.png"
          alt="logo"
          width="100"
          height="100"
        />
      </div>
      <ul className={navStyles.links}>
        <li className={navStyles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={navStyles.link}>
          <Link href="/about">About</Link>
        </li>
        <li className={navStyles.link}>
          <Link href="/skills">Skills</Link>
        </li>
        <li className={navStyles.link}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={navStyles.link}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
