import React from "react"
import { Link } from "gatsby"

import { closeBurger } from "../../utils/burgerAnimation"

const ShowMoreButton = ({ slug, content }) => {
  return (
    <Link className="button button__show-more" to={slug} onClick={closeBurger}>
      {content}
    </Link>
  )
}

export default ShowMoreButton
