import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Post = ({ data }) => {
  return (
    <Layout>
      <ArticleWrapper>
        <div className="topimage">
          {decidedTopImageTag(data)}
        </div>
        <p>Last updated: {data.markdownRemark.frontmatter.date}</p>
        <BlogEntry 
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} 
        />
      </ArticleWrapper>
    </Layout>
  )
}

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
const ArticleWrapper = styled.article`
  max-width: 750px;
  margin: 0 auto;
  .date {
    font-weight: 700;
    time {
      font-size: 1.4rem;
    }
  }
  .topimage {
    text-align: center;
  }
`
const BlogEntry = styled.section`
  margin: 15px 0 30px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`

export default Post