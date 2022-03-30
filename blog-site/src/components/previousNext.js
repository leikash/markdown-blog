import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { linkStyle, prevStyle, nextStyle } from './previousNext.module.css'

const PreviousNext = ({ slug, date, location }) => {
  const previousPage = location.state.previous
  const nextPage = location.state.next
  
  console.log('previousPage:', previousPage)
  console.log('current:', location.state.current)
  console.log('nextPage:', nextPage)
  console.log(slug,date)
  /*
  const allSlug = useStaticQuery(
    graphql`
      query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              date
              title
            }
            slug
          }
        }
      }
    `
  )
  console.log(allSlug.allMdx.nodes)
  const currentNode = allSlug.allMdx.nodes.find(
    (node) => node.slug === slug
  )
  const previousNode = allSlug.allMdx.nodes.find(
    (node) => (node.frontmatter.date < date)
  )
  const nextNode = allSlug.allMdx.nodes.find(
    (node) => (node.frontmatter.date > date)
  )
  console.log('current:',currentNode.slug)
  console.log('previous:',previousNode.slug)
  console.log('next:',nextNode.slug)
  */
  const previousNextData = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            next {
              slug
            }
            node {
              slug
            }
            previous {
              slug
            }
          }
        }
      }
    `
  )
  // console.log(previousNextData.allMdx.edges)
  const previousNextSlug = previousNextData.allMdx.edges.find(
    (edge) => edge.node.slug === slug
  )
  /*
  console.log('prev:', previousNextSlug.previous.slug)
  console.log('node:',previousNextSlug.node.slug)
  console.log('next:', previousNextSlug.next.slug)
  */
  return (
    <div>
      <hr/>
      <ul className={linkStyle}>
        <li className={prevStyle}>
          {previousNextSlug.previous ? 
            <Link to={`/blog/${previousNextSlug.previous.slug}`}>◀ Prev</Link>
            :
            <div></div>
          }
        </li>
        <li className={nextStyle}>
            {previousNextSlug.next ? 
            <Link to={`/blog/${previousNextSlug.next.slug}`}>Next ▶</Link>
            :
            <div></div>
            }
        </li>
      </ul>
    </div>
  )
  return (
    <div>

    </div>
  )
}

export default PreviousNext