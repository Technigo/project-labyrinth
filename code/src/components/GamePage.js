import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Direction } from "./Direction";
import { EndPage } from "./EndPage";
import map from "images/map.png";
import Lottie from 'react-lottie';
import animationData from "../lotties/loading";
import animationDataShip from "../lotties/ship";
import animationDataWater from "../lotties/water";

export const GamePage = () => {
  const labyrinth = useSelector((store) => store.labyrinth.location);
  const loading = useSelector((store) => store.ui.loading);
  const username = useSelector((store) => store.labyrinth.username);
  const [direction, setDirection] = useState("");



  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  
  const defaultOptionsShip = {
    loop: true,
    autoplay: true, 
    animationData: animationDataShip,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const defaultOptionsWater = {
    loop: true,
    autoplay: true, 
    animationData: animationDataWater,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };




  const mapTilesArray = [
    [false, false],
    [false, false],
    [false, false],
    [false, false]
  ]

 
  const createMapTiles = () => {
    let mapTiles = []
    // for-loop over rows (in backward direction so that first is at bottom)
    for (let i = 3; i > -1; i--) {
      mapTiles.push(<div className="black map-tile"></div>)
      // for-loop for columns
      for (let j = 0; j < 2; j++) {

if(mapTilesArray[i][j]){    
  mapTiles.push(

  <div className="white">
    <>
    <Lottie options={defaultOptionsShip} width={100}
    height={100} />
    </>
     </div>


      )    }
      
            
            
            else {

              mapTiles.push(<div className={`map-tile ${mapTilesArray[i][j] ? "white" : "black"}`}></div>)

            }


       
      }
      
      mapTiles.push(<div className="black map-tile"></div>)
   
    }
    return mapTiles

  }

  // sets the current map tile to true, which triggers a class name change
  const setMapTile = (coords) => {
    const ordinates = coords.split(",")
    mapTilesArray[Number(ordinates[1])][Number(ordinates[0])] = true
  }

  // runs the above function with the current coordinates
  setMapTile(labyrinth.coordinates)















  if (labyrinth.actions.length === 0) {
    return <EndPage />;
  } else if (loading) {
    return (
      <article className="GamePageContainer" >
        <section className="GamePageMapContainer">
        <img className="GampePageMap" src={map} alt="map" />
       
        <div className="LoadingContent">
  <div className="LoadingAnimation">
<Lottie 

options={defaultOptions}
height={200}
width={200}
style={{ 
           
  position: 'absolute',

}}
/>
</div>
</div> 
       
        </section>


        

        <section className="DirectionMap">
         
<div className="map-grid">
<Lottie 
className="LottiMap"
options={defaultOptionsWater}
style={{ 

  height:'30vh',
        width:'96vw',   
  position: 'absolute',

}}
/>

          {createMapTiles()}
         
        </div>



</section>



      </article>
    );
  } else if (!loading) {
    return (
      <article className="GamePageContainer">
        <section className="GamePageMapContainer">
        <img className="GampePageMap" src={map} alt="map" />
        <div className="LoadingContent">
          </div>
        <section className="GamePageContent">
          <section className="GamePageStory">
            <p>{labyrinth.description}</p>
            <div className="GamePageCoordinates">
              <p> coordinates:{labyrinth.coordinates}</p>
            </div>
          </section>

          <section className="GamePageItemContainer">
            {labyrinth.actions.map((item) => (
              <div className="GamePageItem">
                <Direction
                  direction={item.direction}
                  key={item.description}
                  description={item.description}
                  direction={item.direction}
                  setdDirection={setDirection}
                />
              </div>
            ))}
          </section>
        </section>
        </section>

<section className="DirectionMap">
      
<div className="map-grid">
<Lottie 
className="LottiMap"
options={defaultOptionsWater}
style={{ 

  height:'30vh',
        width:'96vw',   
  position: 'absolute',

}}
/>

          {createMapTiles()}
         
        </div>
</section>
      </article>
    );
  }
};
