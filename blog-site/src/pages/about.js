import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Layout>
      <main>
        <title>About Me</title>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>We wish fruitful life.</p>
      </main>
    </Layout>
  )
}

export default AboutPage

