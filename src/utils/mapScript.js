import { infoWindowImg } from "../utils/infoWindowScript"
import InfoWindowContent from "../components/Map/InfoWindowContent"

import iconOpen from "../images/icons/map-firstaid.png"
import iconClose from "../images/icons/map-bulldozer.png"

/**
 * Création du script pour charger la Google Map
 * @returns Script Element
 */
export const createScript = () => {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `https://maps.google.com/maps/api/js?key=${process.env.GATSBY_API_MAP}`
  const x = document.getElementsByTagName("script")[0]
  x.parentNode.insertBefore(script, x)

  return script
}

/**
 * Initialisation de la Google Map
 * @param {Object} position La position de la Google Map
 */
export const initMap = (position, zoomNumber, htmlElementID) => {
  const mapContainer = document.getElementById(htmlElementID)
  return new window.google.maps.Map(mapContainer, {
    center: position,
    zoom: zoomNumber,
  })
}

/**
 * Chargement des Markers et InfoWindow de la Google Map par rapport aux donées des Centres
 * @param {Array} data Le tableau de de données des centres
 * @param {Object} position La centre de la Google Map
 */
export const loadMapContent = (data, position, htmlElementID) => {
  const map = initMap(position, 9, htmlElementID)

  data.infoWindowArray = []
  data.allDataCentersJson.edges
    .filter(center => center.node.map)
    .forEach(center => {

         
      const markerPosition = {
        lat: center.node.lat,
        lng: center.node.lng,
      }

      const marker = createMarker(center.node.open, markerPosition, map)
      const infoWindow = createInfoWindow(center)

      center.infoWindow = infoWindow
      center.marker = marker

      data.infoWindowArray.push(infoWindow)

      marker.addListener("click", () => {
        data.infoWindowArray.forEach(item => {
          item.close()
        })
        infoWindow.open(map, marker)
      })
    })
}

/**
 * Create un map with a single Center
 * @param {Object} Center Les données d'un unique Centre médical
 */
export const loadMapSingleCenter = (center)  => {
  const markerPosition = {
    lat: center.dataCentersJson.lat,
    lng: center.dataCentersJson.lng
  }

  const map = initMap(markerPosition,16, `map-${center.dataCentersJson.name}`)

  const marker = createMarker(center.dataCentersJson.open, markerPosition, map)
  const infoWindow = createSingleInfoWindow(center.dataCentersJson)
  
  center.infoWindow = infoWindow
  center.marker = marker
  
  marker.addListener("click", () => {
    infoWindow.open(map, marker)
  })
}

/**
 * Création d'un Marker
 * @param {Boolean} open Si le centre est actuellement ouvert ou non
 * @param {Object} position Lat et Lng d'un centre
 * @param {Object} map La Google Map
 */
const createMarker = (open, position, map) => {
  return new window.google.maps.Marker({
    position: position,
    map: map,
    icon: open ? iconOpen : iconClose,
  })
}

/**
 * Création d'une infoWindow pour le chargement de l'ensemble des centres
 * @param {Object} center Un centre médical
 * @returns
 */
const createInfoWindow = center => {
  const content = InfoWindowContent(
    center.node,
    infoWindowImg(center.node.index),
    true
  )
  return new window.google.maps.InfoWindow({
    content: content,
    maxWidth: "350px",
  })
}

/**
 * Création d'une infoWindow pour un seul Centre
 * @param {Object} center Un centre médical
 * @returns
 */
const createSingleInfoWindow = center => {
  const content = InfoWindowContent(
    center,
    infoWindowImg(center.index),
    true
  )
  return new window.google.maps.InfoWindow({
    content: content,
    maxWidth: "350px",
  })
}
