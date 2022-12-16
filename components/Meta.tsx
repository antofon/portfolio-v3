import Head from 'next/head';
import react, { ReactNode } from 'react';

interface MetaInfo {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: MetaInfo) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>Anwana Ntofon | Web Developer</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Anwana Ntofon | Web Developer',
  keywords: 'web development, programming',
  description: 'Portfolio website',
};

export default Meta;