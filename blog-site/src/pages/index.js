import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  const blogBody = (node) => {
    console.log(node)
    let htmlBody = node.html
    console.log(typeof(htmlBody))

    return { __html: htmlBody }
  }

  return (
    <div>
      <Layout>
        <h1 className="text-4xl font-bold underline text-green-800">
          Leikash Blog
        </h1>
        {
          data.allMarkdownRemark.nodes.map(node => (
            <div key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <h2>{node.frontmatter.date}</h2>
              <div dangerouslySetInnerHTML={blogBody(node)} />
            </div>
          ))
        }
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        html
        timeToRead
        frontmatter {
          title
          date
        }
      }
    }
  }
`

export default Home