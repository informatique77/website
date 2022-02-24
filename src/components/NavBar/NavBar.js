import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Burger from "../Burger/Burger"
import Menu from "../Menu/Menu"

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          <StaticImage
            src="../../assets/images/logo-consultations77.png"
            loading="eager"
            width={125}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo Consultations 7 sur 7"
            placeholder="blurred"
          />
        </Link>
      </div>
      <Menu />
      <Burger />
      <div className="logo-mobile">
        <Link to="/">
          <StaticImage
            src="../../assets/images/logo-consultations77.png"
            loading="eager"
            width={125}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo Consultations 7 sur 7"
            placeholder="blurred"
          />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
