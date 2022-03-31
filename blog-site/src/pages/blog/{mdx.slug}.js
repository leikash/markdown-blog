import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import PreviousNext from '../../components/previousNext'
import { blogTitle, topImage, topDate } from './{mdx.slug}.module.css' 

// ブラウザのタブにタイトルを出すために使っているのでこのままにする
// pageTitle={data.mdx.frontmatter.title}

const BlogPost = ({ data, location }) => {
  console.log('Z mdx current:', location)
  console.log('a location pathname:', location.pathname)
  console.log('b mdx current:', location.state)
  console.log('c allMdx:', data.allMdx.nodes)
  // URL直接入力のときにlocation.stateがnullになってしまう。
  // index.jsで設定せずにここで設定する方法を考える必要あり。
  if(location.state === null || location.state === undefined){
    location.state = {
      current: `${location.pathname}`,
    }
  }
  if(location.state.current === null || location.state.current === undefined){
    location.state = {
      current: `${location.pathname}`
    }
  }

  console.log('mdx current:', location.state)
  // seo.jsと共に実装
  let imagePathBase = `../images/bookshelf.jpg`
  if(data.mdx.frontmatter.topImage){ 
    imagePathBase = `../../blog/images/${data.mdx.slug}/${data.mdx.frontmatter.topImage.base}`
  }
  // seo.jsと共に実装, ここまで
  // ここを通ると必ずlocation.state.currentが入るようにする
  // {typeof(location) ? location.state = {current: data.mdx.slug} : console.log('no location')}
  console.log('location.state:', location.state)
  // 前ページ、次ページを決める
  let pagePointer = (data, state = location.state) => {
    let index = data.allMdx.nodes.findIndex((node) => `/blog/${node.slug}` === state.current)
    console.log('current index:', index)
    state.current = {title: 'Hello'}
    console.log('current:', state.current)
    if(!state.previous){
      console.log('no previous')
      if(index+1 < data.allMdx.nodes.length){
        state.previous = `/blog/${data.allMdx.nodes[index+1].slug}`
      }
      console.log('added previous:', state.previous)
    }
    if(!state.next){
      console.log('no next')
      if(index > 0){
        state.next = `/blog/${data.allMdx.nodes[index-1].slug}`
      }
      console.log('added next:', state.next)
    }
    return state
  }
  console.log('pagePointer:', pagePointer(data))
  return (
    <Layout 
      pageTitle={data.mdx.frontmatter.title} 
      pageDescription={data.mdx.frontmatter.description} 
      imgPath={imagePathBase} 
    >
      <div className={blogTitle}>{data.mdx.frontmatter.title}</div>
      <div className={topDate}>Last updated: {data.mdx.frontmatter.date}</div>
      <div className={topImage}>
        <DecidedTopImage topImage={data.mdx.frontmatter.topImage} />
      </div>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <PreviousNext 
        previousNext={pagePointer(data)}
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