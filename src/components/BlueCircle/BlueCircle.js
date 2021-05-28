import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./BlueCircle.scss"
import { closeBurger } from "../../utils/burgerAnimation"

const BlueCircle= ({ slug, img, text }) => {
  return (
    <Link to={slug} onClick={closeBurger} onKeyDown={closeBurger}>
      <div className="blueCircle">
        <div className="blue-img-container">
          {img}
          <span className="circle-text">{text}</span>
        </div>
      </div>
    </Link>
  )
}

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

BlueCircle.propTypes = {
  slug: PropTypes.string,
  img : PropTypes.object,
  text : PropTypes.string
}

export default BlueCircleContainer