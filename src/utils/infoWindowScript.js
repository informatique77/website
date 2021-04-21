import imgSmolett from "../images/centers/smolett.jpg"
import imgLamartine from "../images/centers/lamartine.jpg"
import imgLenval from "../images/centers/lenval.jpg"
import imgLariane from "../images/centers/lariane.jpg"
import imgNiceNord from "../images/centers/nice-nord.jpg"
import imgMenton from "../images/centers/menton.jpg"
import imgCagnes from "../images/centers/cagnes.jpg"
import imgCannes from "../images/centers/cannes.jpg"

export const infoWindowImg = index => {
  switch (index) {
    case 1:
      return imgSmolett
    case 2:
      return imgLamartine
    case 3:
      return imgLenval
    case 4:
      return imgLariane
    case 5:
      return imgNiceNord
    case 6:
      return imgMenton
    case 7:
      return imgCagnes
    case 8:
      return imgCannes
    default:
  }
}

export const closeInfoWindow = (center, array, map) => {
  if (center.infoWindow) {
    array.forEach(item => {
      item.close()
    })
    center.infoWindow.open(map, center.marker)
  }
}
