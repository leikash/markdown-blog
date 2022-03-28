import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { homeImage } from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout topPage={true}>
      <p>We wish your fruitful life.</p>
      <div className={homeImage}>
        <StaticImage
          src="../images/ElNido.jpg"
          alt="Site top image"
        />
        <br/>
        <p>
          <a href="https://rpx.a8.net/svt/ejp?a8mat=3N6E9C+DT4YWI+2HOM+6I9N5&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0eb4779e.5d30c5ba.0eb4779f.b871e4e3%2Fa22032856216_3N6E9C_DT4YWI_2HOM_6I9N5%3Fpc%3Dhttp%253A%252F%252Ftravel.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Ftravel.rakuten.co.jp%252F" rel="nofollow" target="_blank">
          <img src="http://hbb.afl.rakuten.co.jp/hsb/0ea7f9a4.79280dcb.0ea7f99d.1ac92fca/153145/" border="0"/></a>
          <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=3N6E9C+DT4YWI+2HOM+6I9N5" alt=""></img>
        </p>
      </div>
    </Layout>
  )
}
export default IndexPage

/* トップページをシンプルにするためコメントアウトする
ここから下は全部コメント
import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  console.log("Passed IndexPage")
  console.log(data)
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Layout>
      <p>We wish your fruitful life.</p>
      <StaticImage
        src="../images/ElNido.jpg"
        alt="Site top image"
      />
        <Bloglist data={ data } />
    </Layout>
    </div>
  )
}

const Bloglist = ({ data }) => {
  console.log("Bloglist index.js")
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
*/
