import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./BlueCircle.scss"
import { burgerAnimation } from "../../utils/burgerAnimation"

const BlueCircleOurJob = () => {
  return (
    <Link to="/notre-metier" onClick={burgerAnimation} onKeyDown={burgerAnimation}>
    <div className="blueCircle">
      <div className="blue-img-container">
        <StaticImage
          placeholder="blurred"
          layout="fixed"
          quality={95}
          src="../../images/circle/white-wallet.png"
          alt="Note métier"
        />
        <span className="circle-text">Notre métier</span>
      </div>
    </div>
    </Link>
  )
}

export default BlueCircleOurJob
