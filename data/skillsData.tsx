export interface SkillsProps {
  skills: Skills[];
}

export interface Skills {
  skillsIcon: string;
  skillsTitle: string;
}

const skillsData: Skills[] = [
  {
    skillsIcon: '/assets/images/skills/html5-original.svg',
    skillsTitle: 'HTML',
  },
  {
    skillsIcon: '/assets/images/skills/css3-original.svg',
    skillsTitle: 'CSS',
  },
  {
    skillsIcon: '/assets/images/skills/javascript-original.svg',
    skillsTitle: 'JavaScript',
  },
  {
    skillsIcon: '/assets/images/skills/typescript-original.svg',
    skillsTitle: 'TypeScript',
  },
  {
    skillsIcon: '/assets/images/skills/react-original.svg',
    skillsTitle: 'React',
  },
  {
    skillsIcon: '/assets/images/skills/nextjs-line.svg',
    skillsTitle: 'Next.js',
  },
  {
    skillsIcon: '/assets/images/skills/nodejs-original.svg',
    skillsTitle: 'Node.js',
  },
  {
    skillsIcon: '/assets/images/skills/sass-original.svg',
    skillsTitle: 'Sass',
  },
];

export default skillsData;
