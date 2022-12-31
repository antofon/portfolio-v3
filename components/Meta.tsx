import Head from 'next/head';

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
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Anwana Ntofon | Home',
  keywords: 'web development, programming',
  description: 'Oakland-based web developer devoted to crafting accessible and purposeful web experiences.',
};

export default Meta;
