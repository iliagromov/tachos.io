import type { GatsbyConfig } from "gatsby";


const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tachos`,
    author: 'iliagromov',
    siteUrl: `http://tachos.ru/`,
    blog: 'my blog',

  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // {
    //   resolve: `gatsby-plugin-yandex-metrika`,
    //   options: {
    //     // The ID of yandex metrika.
    //     trackingId: 68013103,
    //     // Enabled a webvisor. The default value is `false`.
    //     webvisor: true,
    //     // Enables tracking a hash in URL. The default value is `false`.
    //     trackHash: true,
    //     // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
    //     // and `true` means after the body (faster loading, less hits). The default value is `false`.
    //     afterBody: true,
    //     // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
    //     // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
    //     defer: false,
    //   },
    // },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     url:  "https://gromov-studio.site/graphql",
    //     // url:  "http://localhost:8080/graphql",
    //     baseUrl: `gromov-studio.site`,
    //     // protocol: `https`,
    //     verbose: true,
    //     develop: {
    //       hardCacheMediaFiles: true,

    //       // server wp update  5min times
    //       nodeUpdateInterval: 1000,
    //     },
    //     debug: {
    //       graphql: {
    //         writeQueriesToDisk: true,
    //         showQueryVarsOnError: true,
    //         panicOnError: true,
    //       },
    //     },
    //     useACF: true,
        

    //     excludeFieldNames: ['comments', 'blocksJSON', 'previewBlocks', 'previewBlocksJSON'],
    //     type: {
    //       Post: {
    //         limit:
    //           process.env.NODE_ENV === `development`
    //             ? // The number of posts to fetch on development
    //               30
    //             : // ... and on build
    //               null,
    //       },
    //       Comment: {
    //         limit: 0,
    //       },
    //       MediaItem: {
    //         localFile: {
    //           requestConcurrency: 5,
    //         },
    //         lazyNodes: false,
    //       },
    //     },
    //     html: {
    //       useGatsbyImage: true,
    //       fallbackImageMaxWidth: 200,
    //       createStaticFiles: true,
    //       imageMaxWidth: 756,
    //     },
    //     schema: {
    //       timeout: 3000000,
    //       requestConcurrency: 1,
    //       previewRequestConcurrency: 1,
    //       perPage: 1,
    //     },
    //     // production: {
    //     //   allow404Images: true,
    //     //   hardCacheMediaFiles: true,
    //     // },
    //   },
    // }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sass", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/icons/favicon-32.png"
      }
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "png",
        "path": `${__dirname}/src/assets/images/png`
      },
    __key: "png"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "svg",
        "path": `${__dirname}/src/assets/images/svg`
      },
    __key: "svg"
    },
]
};

export default config;
