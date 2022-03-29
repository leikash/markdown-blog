/*
スタイルの勉強のため、Gatsby公式チュートリアルをやってみる
https://www.gatsbyjs.com/docs/tutorial/
*/
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  titleStyle,
  blogListBackground,
  blogLink,
  blogListBorder,
  blogLinkText,
  blogDateText,
  blogSummaryText,
} from './index.module.css'

const BlogPage = ({ data }) => {
  console.log(data.allMdx.edges)
  return (
    <Layout pageTitle="Blog記事リスト" pageDescription="（Blog記事リストの説明）">
      <h1 className={titleStyle}>Blog</h1>
      <div>
      {
        data.allMdx.nodes.map((node) => (
          <div key={node.id}>
          <Link to={`/blog/${node.slug}`} className={blogLink}>
            <div className={blogListBorder}>
              <div className={blogDateText}>
                Last updated: {node.frontmatter.date}
              </div>
              <div className={blogLinkText}>
                {node.frontmatter.title}
              </div>
              <div className={blogSummaryText}>
                {node.frontmatter.summary}
              </div>
            </div>
          </Link>
          </div>
        ))
      }
      </div>
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
          summary
        }
        id
        slug
      }
      edges {
        next {
          slug
          id
        }
        node {
          slug
          id
        }
        previous {
          slug
          id
        }
      }
    }
  }
`

export default BlogPage