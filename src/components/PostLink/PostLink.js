import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./PostLink.scss"

const PostLink = ({ post }) => {
  const image = getImage(post.frontmatter.img.childImageSharp)
  return (
 
      <Link className="postlink-card" to={post.fields.slug}>
        <div className="postlink-image">
        <GatsbyImage image={image} alt={post.frontmatter.title} />
        </div>
        <div className="postlink-txt">
          <h3 className="postlink-title">{post.frontmatter.title}</h3>
          <p className="postlink-excerpt">{post.frontmatter.excerpt}</p>
          <p className="postlink-date">{post.frontmatter.date}</p>
        </div>
      </Link>
  )
}
export default PostLink
