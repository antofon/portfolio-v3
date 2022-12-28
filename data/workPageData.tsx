export interface WorkPageProps {
  work: workPage[];
  workId: number;
}

export interface workPage {
  workPageHeaderImage: string;
  //   workPageUrl: string;
  //   projectDemoUrl: string;
  //   projectCodeUrl: string;
  workPageGallery: [
    { image: string; caption: string },
    { image: string; caption: string },
    { image: string; caption: string }
  ];
  url: string;
  workPageTitle: string;
  workPagePosition: string;
  workPageDescription: string;
  workId: number;
}

const workPageData: workPage[] = [
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    workPageGallery: [
      {
        image:
          '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
        caption: 'first image',
      },
      {
        image:
          '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
        caption: 'second image',
      },
      {
        image:
          '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
        caption: 'third image',
      },
    ],
    // workPageUrl: '/portfolio',
    // projectDemoUrl: 'https://anwanantofon.me/',
    // projectCodeUrl: 'https://github.com/antofon/portfolio-v3',
    url: 'https://getguru.com/',
    workPageTitle: 'Guru Technologies',
    workPagePosition: 'Web Engineer II',
    workId: 0,
    workPageDescription:
      'This is the third iteration of my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project.',
  },
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    // workPageUrl: '/stemreads',
    // projectDemoUrl: 'https://stem-reads.netlify.app/',
    // projectCodeUrl: 'https://github.com/antofon/stem-reads',
    workPageGallery: [
      {
        image:
          '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
        caption: 'first image',
      },
      {
        image:
          '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
        caption: 'second image',
      },
      {
        image:
          '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
        caption: 'third image',
      },
    ],
    url: 'https://www.facebook.com/business/',
    workPageTitle: 'Crystal Equation Corporation at Facebook (now Meta)',
    workPagePosition: 'CMS Specialist',
    workPageDescription:
      'This is the third iteration of my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project.',
    workId: 1,
  },
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    // workPageUrl: '/wikipedia',
    // projectDemoUrl: 'https://antofon.github.io/wikipediaviewer/',
    // projectCodeUrl: 'https://github.com/antofon/wikipediaviewer',
    workPageGallery: [
      {
        image: '/assets/images/experience/work/art/art_1.png',
        caption: 'Homepage',
      },
      {
        image: '/assets/images/experience/work/art/art_2.png',
        caption: 'second image',
      },
      {
        image: '/assets/images/experience/work/art/art_3.png',
        caption: 'third image',
      },
    ],
    url: 'https://www.art.com/',
    workPageTitle: 'Art.com',
    workPagePosition: 'Jr. Front-End Web Developer',
    workPageDescription:
      'This is the third iteration of my Portfolio. It was an exciting challenge for me to apply my Next.js and TypeScript skills to a real-world project.',
    workId: 2,
  },
];

export default workPageData;
