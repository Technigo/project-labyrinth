// Import necessary React and Redux hooks and components
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CoordsImageDisplay } from './CoordsImageDisplay';
import { GameWrapper, LoadingText } from '../Styles/Globalstyles';

// This component shows a loading text and loads the background images
export const Loader = ({ onContentLoaded }) => {
// Get the labyrinth coordinates and player's name from the Redux store
  const coordinates = useSelector((store) => store.labyrinthMango.coordinates);
  const name = useSelector((store) => store.labyrinthMango.name);
  // Create state variables to handle loading status
  const [loaderCoordinates, setLoaderCoordinates] = useState(coordinates || (name ? '0,0' : null));
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displayLoadingText, setDisplayLoadingText] = useState(false);
  const [minDisplayTimeElapsed, setMinDisplayTimeElapsed] = useState(false);
  // When the game restarts, reset the imageLoaded state to false
  useEffect(() => {
    if (coordinates || (name && !imageLoaded)) {
      setLoaderCoordinates(coordinates || '0,0');
      setImageLoaded(false); // Reset imageLoaded state to false on restart
    }
  }, [coordinates, name, imageLoaded]);
  // Show the loading text for at least 1 second or until the image is loaded
  useEffect(() => {
    if (!imageLoaded) {
      setDisplayLoadingText(true);
      const timer = setTimeout(() => {
        setMinDisplayTimeElapsed(true);
        if (imageLoaded) {
          setDisplayLoadingText(false);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  // When the image is loaded, set the imageLoaded state to true
  const handleImageLoad = () => {
    setImageLoaded(true);
    if (minDisplayTimeElapsed) {
      setDisplayLoadingText(false);
      onContentLoaded();
    }
  };
  return (
    <GameWrapper>
      {/* Display the CoordsImageDisplay component if loaderCoordinates is available */}
      {loaderCoordinates && (
        <CoordsImageDisplay
          coordinates={loaderCoordinates}
          onImageLoad={handleImageLoad}
          onContentLoaded={onContentLoaded} />
      )}
      {/* Display the Loading.. if the image is not loaded OR displayLoadingText is true */}
      {(!imageLoaded || displayLoadingText) && <LoadingText>Loading..</LoadingText>}
    </GameWrapper>
  );
};