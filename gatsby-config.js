/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RMAPI",
        fieldName: "rickAndMorty",
        url: "https://rickandmortyapi-gql.now.sh/",
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "ricks__",
        url:"https://dog.ceo/api/breeds/image/random",
        method: "get",
        name: `pics`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}