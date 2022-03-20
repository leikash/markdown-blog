import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { BlogListWrapper } from "../styles/blog-list-style"

const Home = ({ data }) => {
  return (
    <div>
      <Layout>
        <BlogListWrapper>
          {data.allMarkdownRemark.nodes.map(node => (
            <div key={node.id}>
              <Link 
                  to={node.fields.slug}>
                <li><div>
                  <h2>
                      {node.frontmatter.title}
                  </h2>
                  <div>
                    {decidedImageTag(node)}
                  </div>
                  {node.frontmatter.date}
                </div></li>
              </Link>
                <li>
                  <div className="thumbnail">
                    {node.frontmatter.summary}
                  </div>
                </li>
            </div>
          ))}
        </BlogListWrapper>
      </Layout>
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