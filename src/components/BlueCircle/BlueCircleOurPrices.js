import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./BlueCircle.scss"
import { burgerAnimation } from "../../utils/burgerAnimation"

const BlueCircleOurPrices = () => {
  return (
    <Link to="/nos-tarifs" onClick={burgerAnimation} onKeyDown={burgerAnimation}>
    <div className="blueCircle">
      <div className="blue-img-container">
        <StaticImage
          placeholder="blurred"
          layout="fixed"
          quality={95}
          src="../../images/circle/white-euro.png"
          alt="Nos tarifs"
        />
        <span className="circle-text">Nos tarifs</span>
      </div>
    </div>
    </Link>
  )
}

export default BlueCircleOurPrices
