import React from "react"
import { Link } from "gatsby"

import { burgerAnimation } from "../../utils/burgerAnimation"
import "./Buttons.scss"

const IconButton = ({ css, slug, content, staticImage }) => {
  return (
    <Link className={css} to={slug} onClick={burgerAnimation}>
      {staticImage}
      {content}
    </Link>
  )
}
export default IconButton
