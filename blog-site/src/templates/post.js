import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

  /* html部分を外出しにする。作りかけなのでコメントアウト
  const blogBody = (node) => {
    // console.log(node)
    let htmlBody = node.html
    // console.log(typeof(htmlBody))

    return { __html: htmlBody }
  }
  */


export default function Post({ data }) {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
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
      }
    }
  }
`