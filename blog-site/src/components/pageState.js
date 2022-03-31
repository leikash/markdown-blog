// 画面遷移をコントロールするために画面遷移を決定するstateを作る部分を外出しする
import { useStaticQuery, graphql } from 'gatsby'

const pageState = (location) => {
  console.log('PP a location pathname:', location.pathname)
  /*
  if(location.state === null || 
    location.state === undefined || 
    location.state.current === null || 
    location.state.current === undefined){
    location.state = {
      current: {path: location.pathname}
    }
  }
  */
  const data = useStaticQuery(
    graphql`
      query {
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
  );
  // location.stateの初期化処理。自分のpathを入れて、state生成する
  location.state = {
    current: {
      path: location.pathname,
    }
  }
  console.log('PP b mdx current:', location.state)
  console.log('PP c allMdx:', data.allMdx.nodes)
  console.log('PP d location.state:', location.state)
  // currentPageのindex番号を見つける
  let currentIndex = data.allMdx.nodes.findIndex((node) => `/blog/${node.slug}` === location.state.current.path)
  // currentPageのtitleを追加する pathが上書きされないようにする必要あり。
  /*
  location.state.current = {
    title: data.allMdx.nodes[currentIndex].frontmatter.title,
  }
  */
  console.log('PP currentIndex:', currentIndex)
  if(location.state.previous === null || location.state.previous === undefined){
    if(currentIndex+1 < data.allMdx.nodes.length){
      location.state.previous = {
        path: `/blog/${data.allMdx.nodes[currentIndex+1].slug}`
      }
      console.log('ADDED PREV')
    }
  }
  if(location.state.next === null || location.state.next === undefined){
    if(currentIndex > 0){
      location.state.next = {
        path: `/blog/${data.allMdx.nodes[currentIndex-1].slug}`
      }
      console.log('ADDED NEXT')
    }
  }
  console.log('PP e added location state:', location.state)
  
  return location.state
}

export default pageState