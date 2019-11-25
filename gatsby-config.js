module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                      site {
                        siteMetadata {
                          title
                          description
                          siteUrl
                          site_url: siteUrl
                        }
                      }
                    }
                  `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{ "content:encoded": edge.node.html }],
                                })
                            })
                        },
                        query: `
                        {
                          allMarkdownRemark(
                            filter:{frontmatter:{template:{eq: "post"}}}
                            sort: { order: DESC, fields: [frontmatter___date] },
                          ) {
                            edges {
                              node {
                                excerpt
                                html
                                fields { slug }
                                frontmatter {
                                  title
                                  date
                                }
                              }
                            }
                          }
                        }
                      `,
                        output: "/rss.xml",
                        title: "Cristina Ruth's RSS Feed",
                    },
                ],
            },
        },
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {

            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        }
    ]
};
