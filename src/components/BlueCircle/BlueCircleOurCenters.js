import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./BlueCircle.scss"
import { burgerAnimation } from "../../utils/burgerAnimation"

const BlueCircleOurCenters = () => {
  return (
    <Link to="/nos-centres" onClick={burgerAnimation} onKeyDown={burgerAnimation} >
    <div className="blueCircle">
      <div className="blue-img-container">
        <StaticImage
          src="../../images/circle/white-center.png"
          alt="Nos centres"
          placeholder="blurred"
          width={40}
          quality={95}
        />
        <span className="circle-text">Nos centres</span>
      </div>
    </div>
    </Link>
  )
}

export default BlueCircleOurCenters
