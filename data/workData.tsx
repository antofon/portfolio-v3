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
      '/assets/images/experience/work/guru/experience_thumbnail_guru.png',
    workName: 'Guru Technologies Inc.',
    workTitle: 'Web Engineer II',
    workUrl: '/experience/work/guru',
  },
  {
    workImage:
      '/assets/images/experience/work/meta/experience_thumbnail_meta.png',
    workName: 'Facebook (now Meta)',
    workTitle: 'CMS Specialist',
    workUrl: '/experience/work/facebook',
  },
  {
    workImage:
      '/assets/images/experience/work/art/experience_thumbnail_art.png',
    workName: 'Art.com',
    workTitle: 'Jr. Front-End Web Developer',
    workUrl: '/experience/work/art',
  },
];

export default workData;
