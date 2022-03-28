// React-helmet用のコード
// https://zenn.dev/notofu/articles/d84d217244d02a
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title, description, lang, meta }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
        title
        siteUrl
        description
        author
        }
      }
    }
  `)
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `${data.site.siteMetadata.description}`,
        },
      ]}
    />
  )
}

export default Head

/* すぐに使わない設定はコメントアウトする

        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `${data.site.siteMetadata.author}`,
        },
        {
          property: `og:image`,
          content: `${data.site.siteMetadata.siteUrl}/images/tube.png`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: `${data.site.siteMetadata.description}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `thumbnail`,
          content: `${data.site.siteMetadata.siteUrl}/images/tube.png`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: `${data.site.siteMetadata.description}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
*/