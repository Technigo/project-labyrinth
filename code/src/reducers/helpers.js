const img00 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9a8a8bd-0ee8-4007-b068-2ab0229ef429/d5k15t1-8e1d8d15-2c76-430e-8fda-b9f3c25b8f62.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDlhOGE4YmQtMGVlOC00MDA3LWIwNjgtMmFiMDIyOWVmNDI5XC9kNWsxNXQxLThlMWQ4ZDE1LTJjNzYtNDMwZS04ZmRhLWI5ZjNjMjViOGY2Mi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.V2XBPILkeEdcOU2PVUO9UMwofqokSybRliOV1261hyM"
const img01 = "https://i.pinimg.com/564x/04/56/1b/04561b8547741732b1b0db0cfbd4b180.jpg"
const img02 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a79803f-c981-435e-b3aa-9d3fbe9f0bed/d24b11b-b350f08b-248f-4ca0-be6e-ea93edd3041b.jpg/v1/fill/w_1024,h_640,q_75,strp/ice_tomb_by_bezduch_d24b11b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvMGE3OTgwM2YtYzk4MS00MzVlLWIzYWEtOWQzZmJlOWYwYmVkXC9kMjRiMTFiLWIzNTBmMDhiLTI0OGYtNGNhMC1iZTZlLWVhOTNlZGQzMDQxYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OdUEUaHOtxiKn3BWhphcuZZAyZBEeB_Bwc5XxEgvv4Y"
const img03 = "https://i.pinimg.com/originals/48/4a/1a/484a1aad7ded3fecee806fd705082751.jpg"
const img10 = "https://i.pinimg.com/originals/ff/75/b4/ff75b44c6de7b0708bd19dbb0952af98.png"
const img11 = "https://cdna.artstation.com/p/assets/images/images/005/375/102/large/monika-madurska-t-4-0-maze-4a-r-3.jpg?1490600554"
const img13 = "https://static.vecteezy.com/system/resources/previews/000/433/118/non_2x/plant-in-the-cave-vector.jpg"

const places=["0,0","0,1","0,2","0,3","1,0","1,1","1,3",]

 export const placefinder = (coordinates)=>{
  let placeFound 

  places.forEach((place)=>{
    const found = coordinates.search(place)
    if (found >= 0){
      placeFound = place
    }
  })
  return placeFound
}

export const placeImage=(place)=>{
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