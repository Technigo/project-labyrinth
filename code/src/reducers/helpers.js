const img00 = "./assets/00.jpg"
const img01 = "./assets/01.jpg"
const img02 = "./assets/02.jpg"
const img03 = "./assets/03.jpg"
const img10 = "./assets/10.png"
const img11 = "./assets/11.jpg"
const img13 = "./assets/13.jpg"

const places = ["0,0", "0,1", "0,2", "0,3", "1,0", "1,1", "1,3",]

export const placefinder = (coordinates) => {
  let placeFound

  places.forEach((place) => {
    const found = coordinates.search(place)
    if (found >= 0) {
      placeFound = place
    }
  })
  return placeFound
}

export const placeImage = (place) => {
  switch (place) {
    case places[0]:
      return img00
    case places[1]:
      return img01
    case places[2]:
      return img02
    case places[3]:
      return img03
    case places[4]:
      return img10
    case places[5]:
      return img11
    case places[6]:
      return img13
    default:
      break;
  }
}