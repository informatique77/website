import React from "react"

import { closeBurger  } from "../../utils/burgerAnimation"

const ExternalButton = ({ css, slug, content, staticImage }) => {
  return (
    <a className={css} href={slug} onClick={closeBurger }>
      {staticImage}
      {content}
    </a>
  )
}

export default ExternalButton
