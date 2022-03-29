import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const PreviousNext = ({ slug }) => {
  console.log(slug)
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
  console.log(previousNextData.allMdx.edges)
//  const previousSlug = {previousNextData.allMdx.edges.previous.slug}
//  const nextSlug = {previousNextData.allMdx.edges.next.slug}
//  console.log(previousSlug, nextSlug)
  return (
    <div>
    </div>
  )
}

export default PreviousNext