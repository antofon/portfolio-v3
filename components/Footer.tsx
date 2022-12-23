import { useState, useEffect } from 'react';
import footerStyles from '../styles/Footer.module.css';
import BackToTop from './BackToTop';

const Footer = () => {
  const [visible, setVisible] = useState('none');

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
    <footer className={footerStyles.footer}>
      <BackToTop visible={visible} />
      <p className={footerStyles.footerText}>© 2022 by Anwana Ntofon</p>
    </footer>
  );
};

export default Footer;
