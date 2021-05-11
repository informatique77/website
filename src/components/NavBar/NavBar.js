import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { burgerAnimation } from "../../utils/burgerAnimation"

import "./NavBar.scss"

import { MenuItems } from "../../data/navigation"

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          <StaticImage
            src="../../images/logo-consultations77.png"
            loading="eager"
            width={125}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo Consultations 7 sur 7"
            placeholder="blurred"
          />
        </Link>
      </div>
      <div className="social-networks" style={{display:"none"}}>
        <a href="https://www.facebook.com/consultations77/">
          <StaticImage
            src="../../images/icons/instagram-64.png"
            loading="eager"
            width={64}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo Instagram"
            placeholder="blurred"
          />
        </a>
        <a href="https://www.facebook.com/consultations77/">
          <StaticImage
            src="../../images/icons/facebook-64.png"
            loading="eager"
            width={64}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo Facebook"
            placeholder="blurred"
          />
        </a>
      </div>
      <div
        className="burger"
        role="button"
        tabIndex={0}
        aria-label="burger-trigger-animation"
        onClick={burgerAnimation}
        onKeyDown={burgerAnimation}
      >
        <button className="btn-burger" aria-label="burger-bar-animation">
          <span className="bar bar--1"></span>
          <span className="bar bar--2"></span>
        </button>
      </div>
      <div className="list">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} tabIndex={index}>
                <Link
                  to={item.url}
                  onClick={burgerAnimation}
                  onKeyPress={burgerAnimation}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
