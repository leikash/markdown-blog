import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import { blogTitle, topImage, topDate } from './{mdx.slug}.module.css' 

// ブラウザのタブにタイトルを出すために使っているのでこのままにする
// pageTitle={data.mdx.frontmatter.title}

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={blogTitle}>{data.mdx.frontmatter.title}</div>
      <div className={topDate}>Last updated: {data.mdx.frontmatter.date}</div>
      <div className={topImage}>
        {decidedTopImageTag(data)}
      </div>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

const decidedTopImageTag = (data) => {
// 記事のトップ画像を取り込む
  const topImageObj = (data) => (getImage(data.mdx.frontmatter.topImage))
  if(topImageObj(data)){
    // 記事のトップ画像があるときのタグ
    return(
      <GatsbyImage
        image={topImageObj(data)}
        alt="${data.mdx.frontmatter.topImage.title}"
      />
    )
  }else{
    // 記事のトップ画像がないときのタグ
    return(
      <StaticImage
        src='../../images/proxyclick-visitor-management-system-nezoFjwiuLQ-unsplash.jpg'
        alt='Leikash Blog'
        width={500}
      />
    )
  }
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
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
      body
    }
  }
`

export default BlogPost