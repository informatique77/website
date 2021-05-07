import React from "react"
import PropTypes from "prop-types"
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

BlueCircle.propTypes = {
  slug: PropTypes.string,
  img : PropTypes.object,
  text : PropTypes.string
}

export default BlueCircle
