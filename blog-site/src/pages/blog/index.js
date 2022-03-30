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
  console.log(data.allMdx.nodes)
  console.log('Array length:',data.allMdx.nodes.length)

  const locationState = (index) => {
    console.log('index:', index)
    const PREV = ( data, index ) => {
      if(index > 0){
        return (data.allMdx.nodes[index-1].slug)
      }
    }
    const NEXT = ( data, index ) => {
      if(index+1 < data.allMdx.nodes.length){
        return (data.allMdx.nodes[index+1].slug)
      }
    }

    console.log('prev slug;', PREV(data, index))
    console.log('next slug;', NEXT(data, index))
    return (
      {
        previous: 'PREV',
        current: 'CURRENT',
        next: 'NEXT',
      }
    )
  }
  /*
              {index > 0 ?
            <h2>previous: {data.allMdx.nodes[index-1].slug}</h2>
            :
            <div/>
            }
            <h2>current: {data.allMdx.nodes[index].slug}</h2>
            {data.allMdx.nodes[index+1] ?
            <h2>next: {data.allMdx.nodes[index+1].slug}</h2>
            :
            <div/>
            }
  {
    previous: `${data.allMdx.nodes[index-1].slug}`,
    current: `${node.slug}`,
    next: 'NEXT', 
  }
  */
  return (
    <Layout pageTitle="Blog記事リスト" pageDescription="（Blog記事リストの説明）">
      <h1 className={titleStyle}>Blog</h1>
      <div>
      {
        data.allMdx.nodes.map((node, index) => (
          <div key={node.id}>
          <Link to={`/blog/${node.slug}`}
            className={blogLink}
            state={locationState(index)}
          >
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
    }
  }
`

export default BlogPage