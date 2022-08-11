import React from "react"
import ReactDOMServer from "react-dom/server"

import iconTelephone from "../../assets/images/icons/icon-telephone-blue.png"
import iconWalk from "../../assets/images/icons/walking.png"

import CallButton from "../Buttons/CallButton"
import ExternalButton from "../Buttons/ExternalButton"
import ShowMoreButton from "../Buttons/ShowMoreButton"

import { openOrClose } from "../../utils/timer"

const InfoWindowContent = (center, image, globalMap) => {
  return ReactDOMServer.renderToString(
    <div className="infoWindow-container">
      <h2>
        <span>C</span>
        <span className="red-seven">7</span>
        {center.name}
      </h2>
      <div className="infoWindow-img-container">
        <img src={image} alt={center.name}></img>
      </div>
      <p className="infoWindow-address">{center.address}</p>
      {center.open ? openOrClose(center.index) : null}
      {center.open && globalMap ? (
        <ShowMoreButton slug={center.slug} content={"En savoir plus"} />
      ) : null}
      <div>
        {center.open ? (
          <CallButton
            css="button button__call"
            slug={`tel:${center.tel}`}
            content={center.tel}
            staticImage={<img src={iconTelephone} alt="Téléphone"></img>}
          />
        ) : null}
        {center.direction ? (
          <ExternalButton
            css="button button__travel"
            slug={center.direction}
            content="Vous y rendre"
            staticImage={<img src={iconWalk} alt="Marche"></img>}
          />
        ) : null}
      </div>
    </div>
  )
}

export default InfoWindowContent
