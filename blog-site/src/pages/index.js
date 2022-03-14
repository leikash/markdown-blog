import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

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
              <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <h2>{node.frontmatter.date}</h2>
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
        html
        fields{
          slug
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
`

export default Home