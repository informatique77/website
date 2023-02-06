import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import SocialNetworks from "../SocialNetworks/SocialNetworks"

import { MenuItems } from "../../data/navigation"

const Menu = () => {
  return (
    <div className="menu">
      <div className="top-menu">
        <Link to="actualites" className="recrutment-link">
          Actualités
        </Link>
        <SocialNetworks />
      </div>
      <div className="bottom-menu">
        <div className="logo-menu">
          <Link to="/">
            <StaticImage
              src="../../assets/images/logo-consultations77.png"
              loading="eager"
              width={125}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Logo C7 Santé"
              placeholder="blurred"
            />
          </Link>
        </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} tabIndex={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Menu
