import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Home = ({ data }) => {
  const thumbnailImageObj = (node) => {
    return getImage(node.frontmatter.topImage)
  }
  return (
    <div>
      <Layout>
        <h1>
          Leikash Blog
        </h1>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
              {thumbnailImageObj(node)
                ?
                  <GatsbyImage 
                    image={thumbnailImageObj(node)}
                    alt="${node.frontmatter.title}"
                  />
                :
                  <StaticImage 
                    src='../images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg' 
                    alt='Leikash Blog' 
                    width={200}
                  />
              }
            </Link>
              <p>{node.frontmatter.date}</p>
          </div>
        ))}
      </Layout>
    </div>
  )
}

//              {thumbnailImageTag(node)}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        html
        fields{
          slug
        }
        frontmatter {
          title
          date
          topImage {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
  }
`

export default Home