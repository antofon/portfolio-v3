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
  const [navBg, setNavBg] = useState('#FFFFFF');
  const [linkColor, setLinkColor] = useState('#000000');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCloseColor, setMobileCloseColor] = useState('#000000');
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true);
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/experience/personal/portfolio' ||
      router.asPath === '/experience/personal/stemreads' ||
      router.asPath === '/experience/personal/wikipedia' ||
      router.asPath === '/experience/personal/twitch' ||
      router.asPath === '/experience/work/guru' ||
      router.asPath === '/experience/work/facebook' ||
      router.asPath === '/experience/work/art'
    ) {
      setNavBg('transparent');
      setLinkColor('#FFFFFF');
      setMobileCloseColor('#FFFFFF');
    } else {
      setNavBg('#FFFFFF');
      setLinkColor('#000000');
      setMobileCloseColor('#000000');
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        //don't show shadow on experience pages since no bg nav
        if (
          router.asPath === '/experience/personal/portfolio' ||
          router.asPath === '/experience/personal/stemreads' ||
          router.asPath === '/experience/personal/wikipedia' ||
          router.asPath === '/experience/personal/twitch' ||
          router.asPath === '/experience/work/guru' ||
          router.asPath === '/experience/work/facebook' ||
          router.asPath === '/experience/work/art'
        ) {
          setShadow(false);
        } else {
          setShadow(true);
        }
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
    return (): void => window.removeEventListener('scroll', handleShadow);
  }, [router]);

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
        {/* <Link href="/">
          <Image
            src="/assets/images/logo-v2.png"
            alt="logo"
            width="100"
            height="100"
            priority={true}
          />
        </Link> */}
        <p className={navStyles.name} style={{ margin: '0' }}>
          Anwana Ntofon
        </p>
        {/* <Link href="/" className={navStyles.name}>
          Anwana Ntofon
        </Link> */}
      </div>
      <div className={navStyles.mobileMenuIcon}>
        {typeof width !== 'undefined' && width < 768 ? (
          isMobileMenuOpen ? null : (
            <HiOutlineBars3
              size={40}
              onClick={openMobileMenu}
              style={{ color: `${mobileCloseColor}`, cursor: 'pointer' }}
            />
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
            <Link href="/#experience">
              <li className={navStyles.link}>Experience</li>
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
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuClosed={setIsMobileMenuClosed}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
