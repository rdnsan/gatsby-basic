module.exports = {
  siteMetadata: {
    siteUrl: 'https://gatsbybasiclearn.gatsbyjs.io/',
    title: 'Gatsby Basic',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-mdx',
  ],
};
