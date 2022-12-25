export interface WorkProps {
  work: Work[];
}

export interface Work {
  workImage: string;
  workName: string;
  workTitle: string;
  workUrl: string;
}

const workData: Work[] = [
  {
    workImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    workName: 'Guru Technologies Inc.',
    workTitle: 'Web Engineer II',
    workUrl: '/experience/work/guru',
  },
  {
    workImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    workName: 'Crystal Equation Corporation at Facebook (now Meta)',
    workTitle: 'CMS Specialist',
    workUrl: '/experience/work/meta',
  },
  {
    workImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    workName: 'Art.com',
    workTitle: 'Jr. Front-End Web Developer',
    workUrl: '/experience/work/artdotcom',
  },
];

export default workData;
