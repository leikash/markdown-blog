import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Home = ({ data }) => {
  console.log("Home")
  console.log(data)
  return (
    <Layout>
        <Bloglist data={ data } />
    </Layout>
  )
}

const Bloglist = ({ data }) => {
  console.log("Bloglist")
  console.log(data)
  return (
      <div>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <li>
                <h2>
                  {node.frontmatter.title}
                </h2>
                <div>
                  {decidedImageTag(node)}
                </div>
                  {node.frontmatter.date}
              </li>
            </Link>
            <li>
              {node.frontmatter.summary}
            </li>
          </div>
        ))}
      </div>
  )
}

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
        width={300}
      />
    )
  }
}

export const query = graphql`{
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
        summary
        topImage {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  }
}`

export default Home