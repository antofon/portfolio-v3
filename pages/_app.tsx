import Nav from '../components/Nav';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
