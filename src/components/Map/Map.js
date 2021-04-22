import React, { useEffect } from "react"

import MapList from "../MapList/MapList"
import LiContent from "../MapList/LiContent"

import InfoWindowContent from "./InfoWindowContent"
import { infoWindowImg } from "../../utils/infoWindowScript"

import iconOpen from "../../images/icons/map-firstaid.png"
import iconClose from "../../images/icons/map-bulldozer.png"

import "./Map.scss"

const mapCenter = {
  lat: 43.70488,
  lng: 7.26719,
}

let newMap
let infoWindowArray = []

const Map = ({ allMedicalCenters }) => {
  useEffect(() => {
    let mounted = true
    if (mounted) {
      loadGoogleMapScript(mapCenter, allMedicalCenters)
    }
    return function cleanup() {
      mounted = false
    }
  })

  const loadGoogleMapScript = (position, data) => {
    if (!window.google) {
      var s = document.createElement("script")
      s.type = "text/javascript"
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.GATSBY_API_MAP}`
      var x = document.getElementsByTagName("script")[0]
      x.parentNode.insertBefore(s, x)
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        loadMap(position, data)
      })
    } else {
      loadMap(position, data)
    }
  }

  const loadMap = (position, data) => {
    const open = iconOpen
    const close = iconClose

    newMap = new window.google.maps.Map(document.getElementById("map"), {
      center: position,
      zoom: 9,
    })
    data.allDataCentersJson.edges
      .filter(center => center.node.map)
      .forEach(center => {
        const centerPosition = {
          lat: center.node.lat,
          lng: center.node.lng,
        }
        const marker = new window.google.maps.Marker({
          position: centerPosition,
          map: newMap,
          icon: center.node.open ? open : close,
        })
        const content = InfoWindowContent(
          center.node,
          infoWindowImg(center.node.index),
          true
        )
        const infoWindow = new window.google.maps.InfoWindow({
          content: content,
          maxWidth: "350px",
        })
        infoWindowArray.push(infoWindow)
        center.infoWindow = infoWindow
        center.marker = marker

        marker.addListener("click", () => {
          infoWindowArray.forEach(item => {
            item.close()
          })
          infoWindow.open(newMap, marker)
        })
      })
  }

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
                  map={newMap}
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
