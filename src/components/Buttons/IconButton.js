import React from "react"
import { Link } from "gatsby"

import { closeBurger  } from "../../utils/burgerAnimation"

const IconButton = ({ css, slug, content, staticImage }) => {
  return (
    <Link className={css} to={slug} onClick={closeBurger }>
      {staticImage}
      {content}
    </Link>
  )
}
export default IconButton
