const siteMetadata = {
  title: 'Patrick Passarella',
  author: 'Patrick Passarella',
  description:
    "I'm Patrick, a fullstack web developer, here I write about some technical and career stuff, also there is some information about me",
  image: '/website-cover.png',
  siteUrl: 'https://patrickpassarella.com/',
  siteLanguage: 'en-US',
  siteLocale: 'en_us',
  twitterUsername: '@P_Passarella',
  menus: ['Home', 'About', 'Blog', 'Contact'],
  socialMedia: {
    linkedin: 'https://linkedin.com/in/patrick-passarella/',
    twitter: 'https://twitter.com/P_Passarella',
    instagram: 'https://instagram.com/patrick_passarella/',
    github: 'https://github.com/PatrickRNG',
    email: 'patrickpassarella@hotmail.com',
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1032,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [
          `gatsby-remark-images`,
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1032,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-zeit-now',
      options: {
        globalHeaders: {
          'referrer-policy': 'same-origin',
          'feature-policy':
            "geolocation 'self'; microphone 'self'; camera 'self'",
          'expect-ct': 'max-age=604800, enforce',
          'strict-transport-security': 'max-age=31536000; includeSubDomains',
          'x-frame-options': 'DENY',
          'x-xss-protection': '1; mode=block',
          'x-content-type-options': 'nosniff',
          'x-download-options': 'noopen',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-175438172-1',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://patrickpassarella.us17.list-manage.com/subscribe/post?u=77ace10819e59c6cb9ca53b5b&amp;id=c014aac34f',
        timeout: 10000,
      },
    },
  ],
};
