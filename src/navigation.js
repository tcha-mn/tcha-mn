import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: '/about',
    },
    {
      text: 'Registration',
      href: '/registration',
    },
    {
      text: 'Classes',
      links: [
        {
          text: 'Choir',
          href: '/choir',
        },
        {
          text: 'Dance',
          href: '/dance',
        },
        {
          text: 'Drama',
          href: '/drama',
        },
        {
          text: 'Lessons',
          href: '/lessons',
        },
      ],
    },
    {
      text: 'Theatre',
      links: [
        { text: 'Fall Musical' },
        { text: 'Winter Ministry Play' },
        { text: 'Spring Classic Play' },
        { text: 'Summer Junior Musical' },
      ],
    },
    /*
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
    */
  ],
  actions: [
    { text: 'Donate', href: 'https://www.paypal.com/donate/?hosted_button_id=6PSJWMWAEXSC2', target: '_blank' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Info',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'FAQ', href: '/faqs' },
      ],
    },
    {
      title: 'Education',
      links: [
        { text: 'Registration', href: '/registration' },
        { text: 'Choir', href: '/choir' },
        { text: 'Dance', href: '/dance' },
        { text: 'Drama', href: '/drama' },
        { text: 'Lessons', href: '/lessons' },
      ],
    },
    {
      title: 'Events',
      links: [
        { text: 'Theatre', href: '#' },
        { text: 'Fieldtrips', href: '#' },
        { text: 'Events', href: '#' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/tcha_mn' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=100070871785399',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCpZfhXP2mX96T1fSM29-nLA',
    },
  ],
  // `<span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  footNote: `&copy; ${new Date().getFullYear()} Twin Cities Homeschoolers for the Arts
  `,
};
