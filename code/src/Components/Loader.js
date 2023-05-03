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

  // State variables
  const [loaderCoordinates, setLoaderCoordinates] = useState(coordinates || (name ? '0,0' : null));
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displayLoadingText, setDisplayLoadingText] = useState(false);
  const [minDisplayTimeElapsed, setMinDisplayTimeElapsed] = useState(false);

  // Handle game restart
  useEffect(() => {
    const handleRestart = () => {
      setLoaderCoordinates(coordinates || (name ? '0,0' : null));
      setImageLoaded(false); // Reset imageLoaded state to false on restart
    };

    window.addEventListener('restart', handleRestart);

    return () => {
      window.removeEventListener('restart', handleRestart);
    };
  }, [coordinates, name]);

  // Show loading text for at least 1 second, or until the image is loaded
  useEffect(() => {
    if (!imageLoaded) {
      setDisplayLoadingText(true);
      const timer = setTimeout(() => {
        setMinDisplayTimeElapsed(true);
        if (imageLoaded) {
          setDisplayLoadingText(false);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  // Handle image load event
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
