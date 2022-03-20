import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
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
      <h1>
        About Page
      </h1>
      <p>{data.site.siteMetadata.title}</p>
    </Layout>
  )
}

export default About

