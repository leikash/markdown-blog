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
    <div>
      <Layout>
        <h1 className="text-pink-400">
          About Page
        </h1>
        <p>{data.site.siteMetadata.title}</p>
      </Layout>
    </div>
  )
}

export default About

