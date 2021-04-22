import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Form from "../Form/Form"

import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-form">
        <div className="footer-logo-container">
          <Link to="/">
          <StaticImage
            src="../../images/logo-consultations77.png"
            width={150}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            placeholder="blurred"
          />
          </Link>
        </div>
        <Form />
      </div>
      <hr></hr>
      <div className="footer-second-section">
        <p>
          Copyright © {new Date().getFullYear()} Consultations 7 sur 7, tous
          droits réservés.
        </p>
        <div className="footer-link">
          <Link to="/mention-legales">Mentions légales</Link>
          <Link to="/politique-confidentialite">Politique de confidentialité</Link>
          <a href="http://www.staffc7.org//login">C7-Staff planning</a>
          <a href="http://salle.staffc7.org/#/login">C7-Staff salle </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

