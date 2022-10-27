module.exports = {
  siteTitle: 'Shreyas Kulkarni',
  siteDescription:
    'Shreyas Kulkarni is studying Computer Science at Rutgers University.',
  siteKeywords:
    'Shreyas Kulkarni, software developer, software engineer, data scientist, jobs, full stack developer, adp, rutgers university',
  siteUrl: 'https://shreyaskulkarni.me/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shreyas Kulkarni',
  location: 'USA',
  email: 'shreyaspkulkarni7@gmail.com',
  github: 'https://github.com/shreyaspkulkarni',
  twitterHandle: '@iamshreyasss',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shreyaspkulkarni',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shreyaspkulkarni/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iamshreyasss',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iamshreyasss',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    // {
    //   name: 'Projects',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
