import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

// 静的イメージ動的イメージのタグを決定して出力する
const decidedImageTag = (node) => {
  const thumbnailImageObj = (node) => (
    getImage(node.frontmatter.topImage)
  )
  if(thumbnailImageObj(node)){
    return(
      <GatsbyImage 
        image={thumbnailImageObj(node)} 
        alt="${node.frontmatter.title}"
      />
    )
  }else{
    return(
      <StaticImage 
        src="../images/proxyclick-visitor-management-system-nezoFjwiuLQ-unsplash.jpg" 
        alt="Leikash Blog" 
        width={200}
      />
    )
  }
}

const Home = ({ data }) => {
  return (
    <div>
      <Layout>
        <main>
          {data.allMarkdownRemark.nodes.map(node => (
            <div key={node.id}>
              <ul>
                <li>
                  <Link to={node.fields.slug}>
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                </li>
                <li>
                  <Link to={node.fields.slug}>
                    {decidedImageTag(node)}
                    <p>{node.frontmatter.date}</p>
                  </Link>
                </li>
                <li>
                  {node.frontmatter.summary}
                </li>
              </ul>
            </div>
          ))}
        </main>
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
          summary
        }
      }
    }
  }
`

export default Home