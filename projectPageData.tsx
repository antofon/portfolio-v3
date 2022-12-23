export interface ProjectPageProps {
  projects: ProjectPage[];
  projectId: number;
}
export interface ProjectPage {
  projectPageHeaderImage: string;
  projectPageUrl: string;
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
    projectPageTitle: 'Portfolio Website',
    projectId: 1,
    projectDescription: "This is the third iteration of my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project.",
    projectPageStack: ['React.js', 'Next.js', 'TypeScript', 'CSS Modules'],
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectPageUrl: '/stemreads',
    projectPageTitle: 'StemReads',
    projectDescription: "This is the third iteration my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project",
    projectId: 2,
    projectPageStack: ['React.js', 'Sass', 'Firebase', 'CSS'],
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectPageUrl: '/wikipedia',
    projectPageTitle: 'Wikipedia Viewer',
    projectDescription: "This is the third iteration my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project",
    projectId: 3,
    projectPageStack: ['HTML', 'CSS', 'JavaScript', 'Wikipedia API'],
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectPageUrl: '/twitch',
    projectPageTitle: 'Twitch Streamers',
    projectDescription: "This is the third iteration my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project",
    projectId: 4,
    projectPageStack: ['HTML', 'CSS', 'JavaScript', 'Twitch API'],
  },
];

export default projectPageData;
