// const { resolve } = require(`path`)
// const { platform } = require(`os`)

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
  {
    resolve: `gatsby-transformer-video`,
    // options: {
    //   /**
    //    * Alternative directory for the video cache
    //    * Default: '.cache-video'
    //    */
    //   cacheDirectory: resolve('node_modules', '.cache-video'),

    //   /**
    //    * Alternative directory for the ffmpeg binaries
    //    * Default: resolve(`.bin`, `gatsby-transformer-video`)
    //    */
    //   cacheDirectoryBin: resolve('node_modules', '.cache-video-bin'),

    //   /**
    //    * Set if FFMPEG & FFPROBE should be downloaded if they are not found locally
    //    *
    //    * Downloaded binaries are stored in `.bin/gatsby-transformer-video/`
    //    *
    //    * Default: true
    //    */
    //   downloadBinaries: false,

    //   /**
    //    * Pass your own FFMPEG && FFPROBE binaries
    //    *
    //    * Assumes you store your binaries in the following pattern:
    //    * ./bin/darwin/ffmpeg
    //    * ./bin/darwin/ffprobe
    //    * ./bin/linux/ffmpeg
    //    * ./bin/linux/ffprobe
    //    * ...
    //    *
    //    * Default: null
    //    */
    //   ffmpegPath: resolve(__dirname, 'bin', platform(), 'ffmpeg'),
    //   ffprobePath: resolve(__dirname, 'bin', platform(), 'ffprobe'),

    //   /**
    //    * Define custom profiles to convert videos with full fluent-ffmpeg access
    //    *
    //    * Learn more: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
    //    */
    //   profiles: {
    //     sepia: {
    //       extension: `mp4`,
    //       // converter: function({ ffmpegSession, videoStreamMetadata }) {
    //         // Example:
    //         // https://github.com/hashbite/gatsby-transformer-video/blob/main/packages/example/gatsby-config.js#L24-L55
    //       },
    //     },
    //   },
    },
    "gatsby-plugin-ffmpeg",
    "gatsby-transformer-ffmpeg",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",  
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-sass", 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              showCaptions: true
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
    {
      resolve: "gatsby-transformer-sharp", 

      options: {
        // The option defaults to true
        checkSupportedExtensions: true,
      },
    },
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": `${__dirname}/src/posts`
      },
    __key: "posts"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images`
      },
    __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "video",
        "path": `${__dirname}/src/assets/video`
      },
    __key: "video"
    },
]
};

export default config;
