import React from 'react';
import { Compass } from './Compass';

export const MazeMap = ({coordinates}) => {

  const coordinatesArray = coordinates.split(',');
  const x = parseInt(coordinatesArray[0]);
  const y = parseInt(coordinatesArray[1]);
  const rows = [0,1];
  const columns = [0,1,2,3];

  return ( 
    <section className="map-wrapper">
    <section className="maze-map">
      {
        rows.map((rowIndex) => (
            <div
            key={rowIndex}
            className="row">
              {columns.map((cellIndex) => (
                <div 
                  key={`${rowIndex}:${cellIndex}`}
                  className={rowIndex === x && cellIndex === y ? "cell-current-position" : "cell"}
                  >
                    <span className="cell-id">{rowIndex},{cellIndex}</span>
                </div> 
              ))}
            </div>
        ))
      }
    </section>
    <section className="compass-wrapper">
      <Compass />
    </section>
    </section>
  )
}