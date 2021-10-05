import React from "react"
import { Link } from "gatsby"

import { closeBurger } from "../../utils/burgerAnimation"

const Button = ({ slug, content, css, staticImage }) => {
  return (
    <Link className={css} to={slug} onClick={closeBurger}>
      {content}
    </Link>
  )
}

export default Button
