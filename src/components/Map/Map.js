import React, { useEffect } from "react"

import MapList from "../MapList/MapList"
import LiContent from "../MapList/LiContent"
import { createScript, loadMapContent } from "../../utils/mapScript"

import "./Map.scss"

const mapCenter = {
  lat: 43.70488,
  lng: 7.26719,
}

const Map = ({ allMedicalCenters }) => {
  useEffect(() => {
    if (!window.google) {
      const script = createScript()
      script.addEventListener("load", e => {
        loadMapContent(allMedicalCenters, mapCenter, "map")
      })
    } else {
      loadMapContent(allMedicalCenters, mapCenter, "map")
    }
  })

  return (
    <>
      <div className="mapAndList-container">
        <div className="google-map-container">
          <div id="map" style={{ height: "100%", width: "100%" }}></div>
        </div>
        <MapList
          content={allMedicalCenters.allDataCentersJson.edges.map(
            (center, index) => {
              return (
                <LiContent
                  key={index}
                  center={center}
                />
              )
            }
          )}
        />
      </div>
    </>
  )
}

export default Map
