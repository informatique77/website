import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { closeBurger } from "../../utils/burgerAnimation"

const BlueCircle = ({ slug, img, text }) => {
  return (
    <Link className="blueCircle" to={slug} onClick={closeBurger} onKeyDown={closeBurger}>
        <div className="blueCircle__img">
          {img}
          <span className="blueCircle__text">{text}</span>
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