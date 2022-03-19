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
        width={300}
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
              <div className="grid grid-cols-2 gap-3 mb-7">
                <div>
                  <Link to={node.fields.slug}>
                    <h2 className="font-bold text-gray-800">
                      {node.frontmatter.title}
                    </h2>
                    <div className="text-right">
                      {decidedImageTag(node)}
                      {node.frontmatter.date}
                    </div>
                  </Link>
                </div>
                <div>
                  {node.frontmatter.summary}
                </div>
              </div>
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
          summary
          topImage {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`

export default Home