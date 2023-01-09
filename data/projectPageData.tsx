export interface ProjectPageProps {
  projects: ProjectPage[];
  projectId: number;
}

export interface ProjectPage {
  projectPageHeaderImage: string;
  projectPageUrl: string;
  projectDemoUrl: string;
  projectCodeUrl: string;
  projectPageTitle: string;
  projectDescription: string;
  projectPageStack: string[];
  projectId: number;
}

const projectPageData: ProjectPage[] = [
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectPageUrl: '/portfolio',
    projectDemoUrl: 'https://anwanantofon.me/',
    projectCodeUrl: 'https://github.com/antofon/portfolio-v3',
    projectPageTitle: 'Portfolio Website',
    projectDescription:
      'This is the third iteration of my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project.',
    projectPageStack: ['React.js', 'Next.js', 'TypeScript', 'CSS Modules'],
    projectId: 0,
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectPageUrl: '/stemreads',
    projectDemoUrl: 'https://stem-reads.netlify.app/',
    projectCodeUrl: 'https://github.com/antofon/stem-reads',
    projectPageTitle: 'StemReads',
    projectDescription:
      'This is a React web application I created to highlight leaders in STEM. Users can create their own accounts and view a dashboard of selected readings. Upon login, they are able to interact with the dashboard (i.e. delete books, reload to default state, etc).',
    projectPageStack: ['React.js', 'Sass', 'Firebase'],
    projectId: 1,
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectPageUrl: '/wikipedia',
    projectDemoUrl: 'https://antofon.github.io/wikipediaviewer/',
    projectCodeUrl: 'https://github.com/antofon/wikipediaviewer',
    projectPageTitle: 'Wikipedia Viewer',
    projectDescription:
      'Welcome to the Wikipedia Viewer! This is a legacy project under the freeCodeCamp curriculum for the Front-End Developer Track. This JavaScript app allows users to search for information using the Media Wiki API. Users can also redirect to random articles by clicking the link “View a Random Article” in the app.',
    projectPageStack: ['HTML', 'CSS', 'JavaScript', 'Wikipedia API'],
    projectId: 2,
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectPageUrl: '/twitch',
    projectDemoUrl: 'https://antofon.github.io/twitch-viewer/',
    projectCodeUrl: 'https://github.com/antofon/twitch-viewer',
    projectPageTitle: 'Twitch Viewer',
    projectDescription:
      'Welcome to the Twitch Viewer! This is a legacy project under the freeCodeCamp curriculum for the Front-End Developer Track. This JavaScript app uses the Twitch API (v5) to display online and offline streamers. The data is present in the script.js file.',
    projectPageStack: ['HTML', 'CSS', 'JavaScript', 'Twitch API'],
    projectId: 3,
  },
];

export default projectPageData;
