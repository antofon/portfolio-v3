import footerStyles from '../styles/Footer.module.css';
import BackToTop from './BackToTop';

const Footer = () => {
  return (
    // <>
      <footer className={footerStyles.footer}>
      {/* <BackToTop /> */}
        <p className={footerStyles.footerText}>© 2022 by Anwana Ntofon</p>
      </footer>
    // {/* </> */}
  );
};

export default Footer;
