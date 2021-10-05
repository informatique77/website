import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const PagesHeader = ({ title }) => {
  return (
    <div className="pages-header-container">
      <div className="pages-header-title">
        <StaticImage
          src="../../assets/images/title.png"
          width={620}
          height={70}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Logo Consultations 7 sur 7"
          placeholder="blurred"
        />
        <h1>{title}</h1>
      </div>
    </div>
  )
}

PagesHeader.protype = {
  title: PropTypes.string,
}

export default PagesHeader
