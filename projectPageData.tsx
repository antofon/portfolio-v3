export interface ProjectPageProps {
  projects: ProjectPage[];
  projectId: number;
}
export interface ProjectPage {
  projectPageHeaderImage: string;
  projectsUrl: string;
  projectsStack: string[];
  projectId: number;
}

const projectPageData: ProjectPage[] = [
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsUrl: '/portfolio',
    projectId: 1,
    projectsStack: ['React.js', 'Next.js', 'TypeScript', 'CSS'],
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsUrl: '/stemreads',
    projectId: 2,
    projectsStack: ['React.js', 'Sass', 'Firebase', 'CSS'],
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsUrl: '/wikipediaapi',
    projectId: 3,
    projectsStack: ['HTML', 'CSS', 'JavaScript', 'Wikipedia API'],
  },
  {
    projectPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsUrl: '/twitchstreamers',
    projectId: 4,
    projectsStack: ['HTML', 'CSS', 'JavaScript', 'Twitch API'],
  },
];

export default projectPageData;
