/*
スタイルの勉強のため、Gatsby公式チュートリアルをやってみる
https://www.gatsbyjs.com/docs/tutorial/
*/
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'


const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage