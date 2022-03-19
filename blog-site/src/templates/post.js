import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

// const defaultTopImage = "<StaticImage src='../images/logo_browser_772201.png' alt='Leikash Blog'></StaticImage>"

const decidedTopImageTag = (data) => {
// 記事のトップ画像を取り込む
  const topImageObj = (data) => (getImage(data.markdownRemark.frontmatter.topImage))
  if(topImageObj(data)){
    // 記事のトップ画像があるときのタグ
    return(
      <GatsbyImage
        image={topImageObj(data)}
        alt="${data.markdownRemark.frontmatter.topImage.title}"
      />
    )
  }else{
    // 記事のトップ画像がないときのタグ
    return(
      <StaticImage
        src='../images/proxyclick-visitor-management-system-nezoFjwiuLQ-unsplash.jpg'
        alt='Leikash Blog'
        width={500}
      />
    )
  }
}
const Post = ({ data }) => {
  return (
    <Layout>
      <article>
        {decidedTopImageTag(data)}
        <p>Last updated: {data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </article>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        topImage {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
export default Post