import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Home = ({ data }) => {
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
              <div 
              dangerouslySetInnerHTML={{ __html: node.html }} />
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
        }
      }
    }
  }
`

export default Home