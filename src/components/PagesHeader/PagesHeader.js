import React from "react"

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

export default PagesHeader
