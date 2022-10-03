import React, { useEffect } from "react"
import { createScript, loadMapContent } from "../../utils/mapScript"

const mapCenter = {
  lat: 43.70488,
  lng: 7.26719,
}

const MapHp = ({ allMedicalCenters }) => {
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
      <div className="map-container">
        <div className="google-map-container">
          <div id="map" style={{ height: "100%", width: "100%" }}></div>
        </div>
      </div>
    </>
  )
}

export default MapHp
