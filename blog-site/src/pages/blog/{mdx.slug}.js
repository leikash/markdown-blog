import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import PreviousNext from '../../components/previousNext'
import pageState from '../../components/pageState'
import TopImage from '../../components/topImage'
import { blogTitle, topImage, topDate } from './{mdx.slug}.module.css' 

// ブラウザのタブにタイトルを出すために使っているのでこのままにする
// pageTitle={data.mdx.frontmatter.title}

const BlogPost = ({ data, location }) => {
  /*
  console.log('Z mdx current:', location)
  console.log('a location pathname:', location.pathname)
  console.log('b mdx current:', location.state)
  console.log('c allMdx:', data.allMdx.nodes)
  console.log('mdx current:', location.state)
  */
  // seo.jsと共に実装
  let imagePathBase = `../images/bookshelf.jpg`
  if(data.mdx.frontmatter.topImage){ 
    imagePathBase = `../../blog/images/${data.mdx.slug}/${data.mdx.frontmatter.topImage.base}`
  }
  // seo.jsと共に実装, ここまで
  //console.log('return value:', pageState(location))
  return (
    <Layout 
      pageTitle={data.mdx.frontmatter.title} 
      pageDescription={data.mdx.frontmatter.description} 
      imgPath={imagePathBase} 
    >
      <div className={blogTitle}>{data.mdx.frontmatter.title}</div>
      <div className={topDate}>Last updated: {data.mdx.frontmatter.date}</div>
      <div className={topImage}>
        <TopImage node={data.mdx.frontmatter}/>
      </div>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <PreviousNext 
        previousNext={pageState(location)}
      />
    </Layout>
  )
}

// SEO対策はここを見ながら入れました。
// https://moon-forest-design.github.io/memo/gatsbyjs-seo/

const DecidedTopImage = (topImage) => {
  // 記事のトップ画像を取り込む
  if(getImage(topImage)){
    // 記事のトップ画像があるときのタグ
    return(
      <GatsbyImage
        image={getImage(topImage)}
        alt="${topImage.title}"
      />
    )
  }else{
    // 記事のトップ画像がないときのタグ
    return(
      <StaticImage
        src='../../images/bookshelf.jpg'
        alt='Karashlei lab.'
        width={750}
      />
    )
  }
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        summary
        date
        topImage {
          childImageSharp {
            gatsbyImageData(
              width: 750
              placeholder: BLURRED
            )
          }
          base
        }
      }
      body
      slug
    }
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
          summary
        }
        id
        slug
      }
    }
  }
`

export default BlogPost