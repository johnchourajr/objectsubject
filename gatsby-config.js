module.exports = {
  siteMetadata: {
    title: 'John.Design',
    siteUrl: 'https://john.design'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-remark-images`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-22938148-6'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ],
        extensions: [`.md`, `.mdx`]
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/mdx/`
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `journal-posts`,
        path: `${__dirname}/src/mdx/journal/posts`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // displayName: false
      }
    }
  ]
};
