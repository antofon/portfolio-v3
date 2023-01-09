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
      '/assets/images/experience/personal/portfolio/experience_thumbnail_portfolio.png',
    projectsTitle: 'Portfolio Website',
    projectsStack: 'React.js / Next.js / TypeScript / CSS Modules',
    projectsUrl: '/experience/personal/portfolio',
  },
  {
    projectsImage:
      '/assets/images/experience/personal/stemreads/experience_thumbnail_stemreads.png',
    projectsTitle: 'StemReads',
    projectsStack: 'React.js / Sass / Firebase',
    projectsUrl: '/experience/personal/stemreads',
  },
  {
    projectsImage:
      '/assets/images/experience/personal/wikipedia/experience_thumbnail_wikipedia.png',
    projectsTitle: 'Wikipedia Viewer',
    projectsStack: 'HTML / CSS / JavaScript / Wikipedia API',
    projectsUrl: '/experience/personal/wikipedia',
  },
  {
    projectsImage:
      '/assets/images/experience/personal/twitch/experience_thumbnail_twitch.png',
    projectsTitle: 'Twitch Viewer',
    projectsStack: 'HTML / CSS / JavaScript / Twitch API',
    projectsUrl: '/experience/personal/twitch',
  },
];

export default projectsData;
