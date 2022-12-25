import { useState, useEffect } from 'react';
import footerStyles from '../styles/Footer.module.css';
import BackToTop from './BackToTop';
import { useRouter } from 'next/router';

const Footer = () => {
  const [visible, setVisible] = useState('none');
  const [homepageFooter, setHomePageFooter] = useState(false)
const router = useRouter();
  useEffect(() => {
    if (
      // router.asPath === '/experience/personal/portfolio' ||
      // router.asPath === '/experience/personal/stemreads' ||
      // router.asPath === '/experience/personal/wikipedia' ||
      // router.asPath === '/experience/personal/twitch' ||
      router.asPath === '/experience/work/guru' ||
      router.asPath === '/experience/work/meta' ||
      router.asPath === '/experience/work/artdotcom'
    ) {
      setHomePageFooter(false);
    } else {
      setHomePageFooter(true);
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
    <footer className={homepageFooter ? footerStyles.footerHomepage : footerStyles.footerExperience}>
      <BackToTop visible={visible} />
      <p className={footerStyles.footerText}>© 2022 by Anwana Ntofon</p>
    </footer>
  );
};

export default Footer;
