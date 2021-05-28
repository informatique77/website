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
export const initMap = position => {
  return new window.google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 9,
  })
}

/**
 * Chargement des Markers et InfoWindow de la Google Map par rapport aux donées des Centres
 * @param {Array} data Le tableau de de données des centres
 * @param {Object} position La centre de la Google Map
 */
export const loadMapContent = (data, position) => {
  const map = initMap(position)

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
 * Création d'une infoWindow
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
