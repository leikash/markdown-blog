import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

// 静的イメージ動的イメージのタグを決定して出力する
const TopImage = (frontmatter) => {
  console.log('topImage: ', frontmatter)
  let imageWidth = 750
  if(frontmatter.node.topImage){
    const image = getImage(frontmatter.node.topImage)
    console.log('image: ', image)
    console.log('route A imageWidth', imageWidth, frontmatter.node.title)
    return(
      <GatsbyImage 
        image={image} 
        alt="${frontmatter.node.title}"
        placeholder="blurred"
        width={imageWidth}
        layout="constrained"
      />
    )
  }else{
    console.log('route B imageWidth', imageWidth, frontmatter.node.title)
    return(
      <StaticImage 
        src="../images/bookshelf.jpg" 
        alt="${frontmatter.node.title}" 
        placeholder="blurred"
        width={imageWidth}
      />
    )
  }
}

export default TopImage