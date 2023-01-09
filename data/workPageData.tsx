export interface WorkPageProps {
  work: workPage[];
  workId: number;
}

export interface workPage {
  workPageHeaderImage: string;
  workPageGallery: [
    { image: string; caption: string },
    { image: string; caption: string },
    { image: string; caption: string }
  ];
  workPageUrl: string;
  workPageTitle: string;
  workPagePosition: string;
  workPageDescription: string;
  workId: number;
}

const workPageData: workPage[] = [
  {
    workPageHeaderImage:
      // '/assets/images/experience/work/guru/experience_thumbnail_guru.png',
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    workPageGallery: [
      {
        image: '/assets/images/experience/work/guru/guru-partner-request.png',
        caption: 'second image',
      },
      {
        image:
          '/assets/images/experience/work/guru/guru_exit_intent_pop_up.png',
        caption: 'first image',
      },
      {
        image: '/assets/images/experience/work/guru/guru-demo-request.png',
        caption: 'third image',
      },
    ],
    workPageUrl: 'https://getguru.com/',
    workPageTitle: 'Guru Technologies',
    workPagePosition: 'Web Engineer II',
    workId: 0,
    workPageDescription:
      'As a Web Engineer II at Guru, I built several landing pages for webinar and demo requests, as well as performed site updates for our marketing site. In addition to these job functions, I fixed coding bugs in our Hubspot landing pages and email templates, to ensure a responsive website experience for customers. Languages that I used include HTML, CSS and JavaScript. There were other projects I worked on like website redesign which consisted of the Astro web framework, and React.',
  },
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
    workPageGallery: [
      {
        image:
          '/assets/images/experience/work/facebook/facebook-holiday-marketing-guide-2020.png',
        caption: 'first image',
      },
      {
        image:
          '/assets/images/experience/work/facebook/facebook-holiday-marketing-guide-success-stories-2020.png',
        caption: 'second image',
      },
      {
        image:
          '/assets/images/experience/work/facebook/facebook-holiday-marketing-guide-success-stories-post-holiday-2020.png',
        caption: 'third image',
      },
    ],
    workPageUrl:
      'https://www.facebook.com/business/m/guide-to-2020-holidays/checklist',
    // workPageTitle: 'Crystal Equation Corporation at Facebook (now Meta)',
    workPageTitle: 'Facebook (now Meta)',
    workPagePosition: 'CMS Specialist',
    workPageDescription:
      "As a CMS Specialist at Facebook (Now Meta) I worked on the Facebook Business and Instagram Business teams to create web assets for SMBs. These web assets included emails, AYMTs (Actions You May Take) and landing pages for specific campaigns. AYMTs provide helpful suggestions to help improve the results for a user's Facebook business activity. One of the projects I enjoyed the most was the 2020 Holiday Marketing Guide. It was a comprehensive layout of how to best connect with customers, improve your execution strategy, and grow your audience. I utilized HTML and CSS on the job and learn how to major web content accessible across dozens of locales.",
    workId: 1,
  },
  {
    workPageHeaderImage:
      '/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg',
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
    workPageUrl: 'https://www.art.com/',
    workPageTitle: 'Art.com',
    workPagePosition: 'Jr. Front-End Web Developer',
    workPageDescription:
      'In my first two weeks at Art.com, I had an incredible opportunity to contribute to a sitewide rebranding. I learned how to operate in a fast paced environment and understood the value of testing code and web assets before going live. I was responsible for daily updates on the homepage, which consisted of our hero image and several content modifications around holiday and other campaign occassions. I enjoyed my time at Art because I learned so many valuable skills and had opportunities to work alongside marketing, design, and project management. In my final months, I had even more opportunities to work with the Data Analyst and Engineering teams to perform A/B testing of homepage content, and edit React code to modify the layout of our modules. Languages I used include: HTML, CSS, JavaScript, jQuery, and React.',
    workId: 2,
  },
];

export default workPageData;
