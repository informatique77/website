import React from "react"
import PropTypes from "prop-types"

import "./Card.scss"

const Card = ({ title, img, content, blue }) => {
  return (
    <div className="card" style={{ backgroundColor: blue ? "#0596de" : "#FFFFFF" }}>
      <div className="card-header">
        <h2 style={{ color: blue ? "#FFFFFF" : "#333333" }}>{title}</h2>
        <div className="img-card-container">{img}</div>
      </div>
      <div className="card-content">{content}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.object,
  content: PropTypes.object,
  blue: PropTypes.bool
}

export default Card
