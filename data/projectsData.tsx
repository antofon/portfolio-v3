export interface ProjectsProps {
  projects: Projects[];
}
export interface Projects {
  projectsImage: string;
  projectsTitle: string;
  projectsStack: string;
  projectsUrl: string;
}

const projectsData: Projects[] = [
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Portfolio Website',
    projectsStack: 'React.js / Next.js / TypeScript / CSS Modules',
    projectsUrl: '/experience/personal/portfolio',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'StemReads',
    projectsStack: 'React.js / Sass / Firebase',
    projectsUrl: '/experience/personal/stemreads',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Wikipedia Viewer',
    projectsStack: 'HTML / CSS / JavaScript / Wikipedia API',
    projectsUrl: '/experience/personal/wikipedia',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Twitch Viewer',
    projectsStack: 'HTML / CSS / JavaScript / Twitch API',
    projectsUrl: '/experience/personal/twitch',
  },
];

export default projectsData;
