import React from "react"
import PropTypes from "prop-types"

import "./PagesHeader.scss"

const PagesHeader = ({ title }) => {
  return (
    <div className="pages-header-container">
      <div className="pages-header-title">
        <h1>
          Consultations <span>7 sur 7</span>
          <br></br>
          {title}
        </h1>
      </div>
    </div>
  )
}

PagesHeader.protype = {
  title: PropTypes.string,
}

export default PagesHeader
