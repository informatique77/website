import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostLink = ({ post }) => {
  const image = getImage(post.frontmatter.img.childImageSharp)
  return (
    <Link className="postlink-card" to={post.fields.slug}>
      <div className="postlink-card__image">
        <GatsbyImage image={image} alt={post.frontmatter.title} />
      </div>
      <div className="postlink-card__txt">
        <h3 className="postlink-card__txt__title">{post.frontmatter.title}</h3>
        <span className="postlink-card__txt__span">
          Consultations{" "}
          <span className="postlink-card__txt__span--red">7 sur 7</span>
        </span>
        <p className="postlink-card__txt__excerpt">
          {post.frontmatter.excerpt}
        </p>
        <p className="postlink-card__txt__date">{post.frontmatter.date}</p>
      </div>
    </Link>
  )
}

PostLink.propTypes = {
  post: PropTypes.object,
}
export default PostLink
