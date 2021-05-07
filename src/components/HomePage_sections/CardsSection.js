import React from "react"

import CardOne from "../Cards/CardOne"
import CardTwo from "../Cards/CardTwo"
import CardThree from "../Cards/CardThree"
import CardFour from "../Cards/CardFour"
import CardFive from "../Cards/CardFive"

import "../../styles/HomePage_sections.scss"

const CardsSection = () => {
  return (
    <div className="cards-sections">
      <div className="cards-section-one">
        <CardOne />
        <CardTwo />
      </div>
      <div className="cards-section-two">
        <CardThree />
        <CardFour />
        <CardFive />
      </div>
    </div>
  )
}

export default CardsSection
