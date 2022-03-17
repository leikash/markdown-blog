import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

// const defaultTopImage = "<StaticImage src='../images/logo_browser_772201.png' alt='Leikash Blog'></StaticImage>"

export default function Post({ data }) {

  console.log('test log')

  const topImage = getImage(data.markdownRemark.frontmatter.topImage)
  const topImageTag = (topImage) => {
      return(<StaticImage src='../images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg' alt='Leikash Blog' />)
      // この外出しの仕方がダメみたい。動的に表示されない。時間切れなので続きは後で。
      // return(<GatsbyImage image={topImage} alt={data.markdownRemark.frontmatter.topImage.title} />)
  }
  return (
    <Layout>
      {topImageTag()}
      <p>Last Updated: {data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        topImage {
          childImageSharp {
            gatsbyImageData(width: 200)
            fixed(width: 700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
  /* html部分を外出しにする。作りかけなのでコメントアウト
  const blogBody = (node) => {
    // console.log(node)
    let htmlBody = node.html
    // console.log(typeof(htmlBody))

    return { __html: htmlBody }
  }
  */

//間違ってたときにもどす  <StaticImage src="../images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg" alt="A mountain" />
// 入門に載ってるやつ <StaticImage src={data.markdownRemark.frontmatter.topImage.childImageSharp.fixed.src} alt="A mountain" />
//  エラーにはならないけど、写真が出ない     <StaticImage alt="A mountain">{data.markdownRemark.frontmatter.topImage.childImageSharp.base64}</StaticImage>
