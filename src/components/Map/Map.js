import React, { useState, useEffect } from "react"

import MapList from "../MapList/MapList"
import LiContent from "../MapList/LiContent"
import { createScript, initMap, loadMapContent } from "../../utils/mapScript"

import "./Map.scss"

const mapCenter = {
  lat: 43.70488,
  lng: 7.26719,
}

const Map = ({ allMedicalCenters }) => {
  const [map, setMap] = useState(null)
  const [infoWindowArray, setInfoWindowArray] = useState([])

  useEffect(() => {
    if (!window.google) {
      const script = createScript()
      script.addEventListener("load", e => {
        setMap(initMap(mapCenter))
        loadMapContent(allMedicalCenters, map)
        setInfoWindowArray(allMedicalCenters.infoWindowArray)
      })
    } else {
      loadMapContent(allMedicalCenters, map)
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
                  map={map}
                  array={infoWindowArray}
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
