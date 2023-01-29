import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import NewsLetter from "../NewsLetter/NewsLetter"
import { closeBurger } from "../../utils/burgerAnimation"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-form">
        <div className="footer-logo-container">
          <Link to="/" onClick={closeBurger}>
            <StaticImage
              src="../../assets/images/logo-consultations77.png"
              width={150}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Logo C7 Santé"
              placeholder="blurred"
            />
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="footer-second-section">
        <p>
          Copyright © {new Date().getFullYear()} C7 Santé, tous
          droits réservés.
        </p>
        <div className="footer-link">
          <Link to="/mention-legales" onClick={closeBurger}>
            Mentions légales
          </Link>
          <Link to="/politique-confidentialite" onClick={closeBurger}>
            Politique de confidentialité
          </Link>
          <a href="http://www.staffc7.org//login">C7-Staff planning</a>
          <a href="http://salle.staffc7.org/#/login">C7-Staff salle</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
