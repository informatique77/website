import React from "react"
import { Link } from "gatsby"

import "./BlueCircle.scss"
import { burgerAnimation } from "../../utils/burgerAnimation"

const BlueCircle= ({ slug, img, text }) => {
  return (
    <Link to={slug} onClick={burgerAnimation} onKeyDown={burgerAnimation}>
      <div className="blueCircle">
        <div className="blue-img-container">
          {img}
          <span className="circle-text">{text}</span>
        </div>
      </div>
    </Link>
  )
}

export default BlueCircle
