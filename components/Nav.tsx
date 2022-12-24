import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { HiOutlineBars3 } from 'react-icons/hi2';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#F7F7F7');
  const [linkColor, setLinkColor] = useState('#000000');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true);
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/portfolio' ||
      router.asPath === '/stemreads' ||
      router.asPath === '/wikipedia' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#FFFFFF');
    } else {
      setNavBg('#F7F7F7');
      setLinkColor('#000000');
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
    return (): void => window.removeEventListener('scroll', handleShadow);
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileMenuClosed(!isMobileMenuClosed);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileMenuClosed(!isMobileMenuClosed);
  };

  return (
    <nav
      className={shadow ? navStyles.shadow : navStyles.navbar}
      style={{ backgroundColor: `${navBg}` }}
    >
      <div className={navStyles.logo}>
        <Link href="/">
          <Image
            src="/assets/images/logo-v2.png"
            alt="logo"
            width="100"
            height="100"
          />
        </Link>
      </div>
      <div className={navStyles.mobileMenuIcon}>
        {typeof width !== 'undefined' && width < 768 ? (
          isMobileMenuOpen ? null : (
            <HiOutlineBars3 size={40} onClick={openMobileMenu} />
          )
        ) : isMobileMenuOpen ? null : (
          <ul className={navStyles.links} style={{ color: `${linkColor}` }}>
            <Link href="/">
              <li className={navStyles.link}>Home</li>
            </Link>
            <Link href="/#about">
              <li className={navStyles.link}>About</li>
            </Link>
            <Link href="/#skills">
              <li className={navStyles.link}>Skills</li>
            </Link>
            <Link href="/#projects">
              <li className={navStyles.link}>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className={navStyles.link}>Contact</li>
            </Link>
          </ul>
        )}
        {isMobileMenuClosed ? null : (
          <MobileNav
            closeMobileMenu={closeMobileMenu}
            isMobileMenuClosed={isMobileMenuClosed}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
