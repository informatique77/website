import imgTeleconsult from "../assets/images/centers/teleconsultation-medicale.jpg"
import imgSmolett from "../assets/images/centers/smolett.jpg"
import imgLamartine from "../assets/images/centers/lamartine.jpg"
import imgLenval from "../assets/images/centers/lenval.jpg"
import imgLariane from "../assets/images/centers/ariane.jpg"
import imgNiceNord from "../assets/images/centers/nice-nord.jpg"
import imgMenton from "../assets/images/centers/menton.jpg"
import imgCagnes from "../assets/images/centers/cagnes.jpg"
import imgCannes from "../assets/images/centers/cannes.jpg"
import imgMandelieu from "../assets/images/centers/mandelieu.jpg"
import imgSaintRaph from "../assets/images/centers/saint-raphael.jpg"

export const infoWindowImg = index => {
  switch (index) {
    case 0 :
      return imgTeleconsult
    case 1:
      return imgSmolett
    case 2:
      return imgLamartine
    case 3:
      return imgLenval
    case 4:
      return imgLariane
    case 5:
      return imgMandelieu
    case 6:
      return imgCagnes
    case 7:
      return imgNiceNord
    case 8:
      return imgMenton
    case 9:
      return imgCannes 
    case 10:
      return imgSaintRaph 
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
