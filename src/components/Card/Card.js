import React from "react"
import PropTypes from "prop-types"

const Card = ({ title, img, content, blue }) => {
  return (
    <div className={ blue ? "card card--blue" : "card" }>
      <div className="card__header">
        <h2 className="card__header__h2">{title}</h2>
        <div className="card__header__img">{img}</div>
      </div>
      <div className="card__content">{content}</div>
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
