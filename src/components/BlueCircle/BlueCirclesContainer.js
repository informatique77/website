import React from "react"

import BlueCircleOurCenters from "./BlueCircleOurCenters"
import BlueCircleOurJob from "./BlueCircleOurJob"
import BlueCircleOurPrices from "./BlueCircleOurPrices"

import "./BlueCircle.scss"

const BlueCircleContainer = () => {
  return (
    <div className="blueCircles-container">
      <BlueCircleOurCenters />
      <BlueCircleOurJob />
      <BlueCircleOurPrices />
    </div>
  )
}

export default BlueCircleContainer
