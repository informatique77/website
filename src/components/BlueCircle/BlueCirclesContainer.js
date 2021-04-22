import React from "react"

import BlueCircleOurCenters from "./BlueCircleOurCenters"
import BlueCircleOurPrices from "./BlueCircleOurPrices"

import "./BlueCircle.scss"

const BlueCircleContainer = () => {
  return (
    <div className="blueCircles-container">
      <BlueCircleOurCenters />
      <BlueCircleOurPrices />
    </div>
  )
}

export default BlueCircleContainer
