export interface ProjectsProps {
  projects: Projects[];
}
export interface Projects {
  projectsImage: string;
  projectsTitle: string;
}

const projectsData: Projects[] = [
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'HTML',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'CSS',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'JavaScript',
  },
  {
    projectsImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    projectsTitle: 'TypeScript',
  },
];

export default projectsData;
