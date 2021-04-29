import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

const Map = () => {
  const game = useSelector((store) => store.game)

  // const onClick {
  //     switch (coordinates) {
  //         case '0,0':
  //             return <div className=""></div>
  //     }
  // }
  
  //[_][O][_]
  //[_][_][_]

  //[_][_][_][_]
  //[_][X][O][_]
  //[_][_][_][_]

 
  //[_][O]
  //[X][X]
  

  let seenSoFar = ["0,0", "1,0", "1,1"]
  //[X][O]

  //0 can't go here
  //1 can go here but haven't been here
  //2 have been here
  //3 IS here

  let mapArray = [
    [1, 1, 0, 0], 
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 0, 0]
  ]

	return (
    <div className="nes-container is-dark with-title">
      <p className="title">MAP</p>
      <div className="map-wrapper">
        {}
        <div className="grid-square"></div>
      </div>
    </div>		
	)
}

export default Map