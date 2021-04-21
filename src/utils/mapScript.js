import InfoWindowContent from "../components/Map/InfoWindowContent"
import { infowindowImg } from "../utils/infowindowImg"

import iconOpen from "../images/icons/map-firstaid.png"
import iconClose from "../images/icons/map-bulldozer.png"

const loadMap = (position, data) => {
  const open = iconOpen
  const close = iconClose

  const newMap = new window.google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 11,
  })

  data.allDataCentersJson.edges
    .filter(center => center.node.map)
    .map(center => {
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
        center,
        infowindowImg(center.node.index)
      )
      const infoWindow = new window.google.maps.InfoWindow({ content })
      center.node.li = infoWindow
      marker.addListener("click", () => {
        infoWindow.open(newMap, marker)
      })
    })
}

export const loadGoogleMapScript = (position, data) => {
  if (!window.google) {
    var s = document.createElement("script")
    s.type = "text/javascript"
    s.src = `https://maps.google.com/maps/api/js?key=${process.env.GATSBY_API_URL}`
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
