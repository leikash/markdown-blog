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
                <li>
                  <h2>
                    <Link 
                      to={node.fields.slug} 
                    >
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                </li>
                <li>
                  <div>
                    {decidedImageTag(node)}
                  </div>
                </li>
                <li>
                  {node.frontmatter.date}
                </li>
                <li>
                  {node.frontmatter.summary}
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