import React from "react"

import { closeBurger  } from "../../utils/burgerAnimation"

const CallButton = ({ css, slug, content, staticImage }) => {
  return (
    <a className={css} href={slug} onClick={closeBurger }>
      {staticImage}
      {content}
    </a>
  )
}

export default CallButton
