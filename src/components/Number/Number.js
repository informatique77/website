import React from "react"
import PropTypes from "prop-types"

const Number = ({ img, number, text }) => {

  return (
    <div className="number-container">
      <div className="img-number">{img}</div>
      <span className="the-number">{number}</span>
      <p className="text-number">{text}</p>
    </div>
  )
}

Number.proTypes = {
  img: PropTypes.object,
  number: PropTypes.number,
  text: PropTypes.string,
}

export default Number
