import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import useWindowDimensions from '../hooks/useWindowDimensions';
import MobileNav from './MobileNav';
import { HiOutlineBars3 } from 'react-icons/hi2';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#FFFFFF');
  const [linkColor, setLinkColor] = useState('#000000');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCloseColor, setMobileCloseColor] = useState('#000000');
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true);
  const { width } = useWindowDimensions();
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
      </div>
      <div>
        {typeof width !== 'undefined' && width < 768 ? (
          isMobileMenuOpen ? null : (
            <button aria-label="Open the menu" className={navStyles.menuIcon}>
              <HiOutlineBars3
                size={40}
                onClick={openMobileMenu}
                style={{ color: `${mobileCloseColor}`, cursor: 'pointer' }}
                aria-hidden="true"
              />
            </button>
          )
        ) : isMobileMenuOpen ? null : (
          <ul
            id="menubutton"
            className={navStyles.links}
            style={{ color: `${linkColor}` }}
            role="menu"
            aria-labelledby="menubutton"
          >
            <li className={navStyles.link} role="presentation">
              <Link href="/" role="menuitem">
                Home
              </Link>
            </li>
            <li className={navStyles.link} role="presentation">
              <Link href="/#about" role="menuitem">
                About
              </Link>
            </li>
            <li className={navStyles.link} role="presentation">
              <Link href="/#skills" role="menuitem">
                Skills
              </Link>
            </li>
            <li className={navStyles.link} role="presentation">
              <Link href="/#experience" role="menuitem">
                Experience
              </Link>
            </li>
            <li className={navStyles.link} role="presentation">
              <Link href="/#contact" role="menuitem">
                Contact
              </Link>
            </li>
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
