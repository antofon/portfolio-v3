export interface ProjectsProps {
  projects: Projects[];
}
export interface Projects {
  projectsImage: string;
  projectsTitle: string;
  projectsStack: string;
}

const projectsData: Projects[] = [
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Portfolio Website',
    projectsStack: 'React/CSS/Next.js',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'StemReads',
    projectsStack: 'React/Sass/Firebase',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Wikipedia Viewer',
    projectsStack: 'HTML/CSS/JavaScript/Wikipedia API',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'Twitch Streamers',
    projectsStack: 'HTML/CSS/JavaScript/Twitch API',
  },
];

export default projectsData;
