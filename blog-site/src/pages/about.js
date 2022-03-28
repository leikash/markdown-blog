import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `
  )
  return (
    <Layout pageTitle="About Me" pageDescription="（Aboutページの説明）">
      <main>
        <title>About Me</title>
        <h1>{data.site.siteMetadata.siteName}</h1>
        <p>We wish fruitful life.</p>
      </main>
    </Layout>
  )
}

export default AboutPage

