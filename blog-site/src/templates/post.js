import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

// const defaultTopImage = "<StaticImage src='../images/logo_browser_772201.png' alt='Leikash Blog'></StaticImage>"

export default function Post({ data }) {

  // console.log('test log')
// 記事のトップ画像を取り込む
  const topImageObj = getImage(data.markdownRemark.frontmatter.topImage)
/*
  // 記事のトップ画像があるときのタグ
  const preparedTopImage = () => {
    return(
      <GatsbyImage
        image={topImageObj}
        alt={data.markdownRemark.frontmatter.topImage.title}
      />
    )
  }
  // 記事のトップ画像がないときのタグ
  const noTopImage = () => {
    return(
      <StaticImage
        src='../images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg'
        alt='Leikash Blog'
        width={500}
      />
    )
  }
  // 記事のトップ画像があるかないかでタグを切り替える
  let topImageTag
  if(topImageObj){
    topImageTag = preparedTopImage()
  }else{
    topImageTag = noTopImage()
  }
*/
  return (
    <Layout>
      {topImageObj
        ?
          <GatsbyImage
            image={topImageObj}
            alt={data.markdownRemark.frontmatter.topImage.title}
          />
        :
          <StaticImage
            src='../images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg'
            alt='Leikash Blog'
            width={500}
          />
      }
      <p>Last updated: {data.markdownRemark.frontmatter.date}</p>
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
        date
        topImage {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
    }
  }
`
