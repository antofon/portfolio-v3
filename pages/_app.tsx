import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* some meta tags not available in Next SEO library */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <NextSeo
        defaultTitle="Home | Anwana Ntofon"
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'web development, programming, front-end web development, portfolio',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        description="Oakland-based web developer devoted to crafting accessible and purposeful web experiences."
        canonical="https://anwanantofon.me"
        openGraph={{
          url: 'https://anwanantofon.me',
          title: 'Home | Anwana Ntofon',
          description:
            'Oakland-based web developer devoted to crafting accessible and purposeful web experiences.',
          images: [
            {
              url: '/assets/og-image.png',
              width: 800,
              height: 420,
              alt: 'Anwana Ntofon',
            },
          ],
        }}
      />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
