export interface ProjectsProps {
  projects: Projects[];
}
export interface Projects {
  projectsImage: string;
  projectsTitle: string;
  projectsStack: string[];
  projectsUrl: string;
}

const projectsData: Projects[] = [
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Portfolio Website',
    // projectsStack: 'React.js / Next.js / TypeScript / CSS',
    projectsStack: ['React.js', 'Next.js', 'TypeScript', 'CSS'],
    projectsUrl: '/portfolio',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'StemReads',
    projectsStack: ['React.js', 'Sass', 'Firebase', 'CSS'],
    projectsUrl: '/stemreads',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Wikipedia Viewer',
    projectsStack: ['HTML', 'CSS', 'JavaScript', 'Wikipedia API'],
    projectsUrl: '/wikipediaapi',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Twitch Streamers',
    projectsStack: ['HTML', 'CSS', 'JavaScript', 'Twitch API'],
    projectsUrl: '/twitchstreamers',
  },
];

export default projectsData;
