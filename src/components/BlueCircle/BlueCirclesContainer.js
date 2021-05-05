import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BlueCircle from "./BlueCircle"

import "./BlueCircle.scss"

const BlueCircleContainer = () => {
  return (
    <div className="blueCircles-container">
      <BlueCircle
        slug="/nos-centres"
        img={
          <StaticImage
            src="../../images/circle/white-center.png"
            alt="Nos centres"
            placeholder="blurred"
            width={40}
            quality={95}
          />
        }
        text="Nos centres"
      />
      <BlueCircle
        slug="/notre-metier"
        img={
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            quality={95}
            src="../../images/circle/white-wallet.png"
            alt="Note métier"
          />
        }
        text="Notre métier"
      />
      <BlueCircle
        slug="/nos-tarifs"
        img={
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            quality={95}
            src="../../images/circle/white-euro.png"
            alt="Nos tarifs"
          />
        }
        text="Nos tarifs"
      />
    </div>
  )
}

export default BlueCircleContainer
