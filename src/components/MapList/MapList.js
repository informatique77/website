import React from "react"

import "./MapList.scss"

const MapList = ({ content }) => {

  return (
    <div className="mapList-container">
      <ul>{content}</ul>
    </div>
  )
}

export default MapList
