import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useWindowDimensions from '../hooks/useWindowDimensions';
import BackToTop from './BackToTop';
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  const [visible, setVisible] = useState('none');
  const [homepageFooter, setHomePageFooter] = useState(false);
  const [isWorkFooter, setIsWorkFooter] = useState(true);
  const { width } = useWindowDimensions();
  const isMobile = typeof width !== 'undefined' && width < 768;
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
      setHomePageFooter(false);
    } else {
      setHomePageFooter(true);
    }

    //apply different styles because content in body affects the footer position
    if (
      router.asPath === '/' ||
      router.asPath === '/experience/work/guru' ||
      router.asPath === '/experience/work/facebook' ||
      router.asPath === '/experience/work/art'
    ) {
      setIsWorkFooter(true);
    } else if (
      router.asPath === '/experience/personal/portfolio' ||
      router.asPath === '/experience/personal/stemreads' ||
      router.asPath === '/experience/personal/wikipedia' ||
      router.asPath === '/experience/personal/twitch'
    ) {
      setIsWorkFooter(false);
    }
  }, [router]);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY + 200) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setVisible('flex');
    } else {
      setVisible('none');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <footer
      className={
        homepageFooter
          ? footerStyles.footerHomepage
          : footerStyles.footerExperience
      }
      style={
        isWorkFooter
          ? { backgroundColor: '#FFFFFF' }
          : // for footer to remain at bottom of screen even after hitting 'Back' button
          homepageFooter && isMobile
          ? { position: 'relative', bottom: '0', backgroundColor: '#FFFFFF' }
          : undefined
      }
    >
      <BackToTop visible={visible} />
      <p className={footerStyles.footerText}>© 2022 by Anwana Ntofon</p>
    </footer>
  );
};

export default Footer;
