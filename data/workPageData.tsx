export interface WorkPageProps {
  work: workPage[];
  workId: number;
}

export interface workPage {
  workPageHeaderImage: string;
//   workPageUrl: string;
  //   projectDemoUrl: string;
  //   projectCodeUrl: string;
  workPageTitle: string;
  workPageDescription: string;
  workId: number;
}

const workPageData: workPage[] = [
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    // workPageUrl: '/portfolio',
    // projectDemoUrl: 'https://anwanantofon.me/',
    // projectCodeUrl: 'https://github.com/antofon/portfolio-v3',
    workPageTitle: 'Guru Technologies',
    workId: 0,
    workPageDescription:
      'This is the third iteration of my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project.',
  },
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    // workPageUrl: '/stemreads',
    // projectDemoUrl: 'https://stem-reads.netlify.app/',
    // projectCodeUrl: 'https://github.com/antofon/stem-reads',
    workPageTitle: 'StemReads',
    workPageDescription:
      'This is a React web application I created to highlight leaders in STEM. Users can create their own accounts and view a dashboard of selected readings. Upon login, they are able to interact with the dashboard (i.e. delete books, reload to default state, etc).',
    workId: 1,
  },
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    // workPageUrl: '/wikipedia',
    // projectDemoUrl: 'https://antofon.github.io/wikipediaviewer/',
    // projectCodeUrl: 'https://github.com/antofon/wikipediaviewer',
    workPageTitle: 'Wikipedia Viewer',
    workPageDescription:
      'Welcome to the Wikipedia Viewer! This is a legacy project under the freeCodeCamp curriculum for the Front-End Developer Track. This JavaScript app allows users to search for information using the Media Wiki API. Users can also redirect to random articles by clicking the link “View a Random Article” in the app.',
    workId: 2,
  },
];

export default workPageData;
