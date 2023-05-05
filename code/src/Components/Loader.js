// Import necessary libraries
import React, { useState, useEffect } from 'react';// We use React for creating components, useState for state management, and useEffect for side effects
import { useSelector } from 'react-redux'; // useSelector allows us to extract data from the Redux store state
import { CoordsImageDisplay } from './CoordsImageDisplay'; // This is our custom component that displays the correct background image based on the current coordinates
import { GameWrapper, LoadingText } from '../Styles/Globalstyles'; // These are styled components for the game wrapper and loading text

// Define the Loader component
export const Loader = () => {
  // Define and initialize state variable 'loaded' with
  // initial value 'false'. This state represents whether the image has loaded
  const [loaded, setLoaded] = useState(false);
  // useState: This is like a switch. It can be turned on or off.
  // We have one switch here, loaded.
  // loaded tells us if the background image for the new room is ready to be shown,
  // and we are currently waiting still 1 second after that tha t image have time to be loaded.

  // Get the current game's coordinates from the Redux store
  const coordinates = useSelector((store) => store.labyrinthMango.coordinates);

  // useEffect is a hook that lets us perform side effects in function components.
  // Here, we are using it to set the 'loaded' state to 'false' every time the coordinates change.
  // Here, we are using it to set the 'timer' state to 'false' every time the coordinates change.
  // Meaning: every time user moves in the labyrinth, we reset (or kind of "activate") loading state
  useEffect(() => {
    setLoaded(false); // Reset the loaded state to 'false'
  }, [coordinates]); // We only need to add 'coordinates' to the dependencies array

  // This is our helper. Whenever the new background image for the room is fully loaded
  // and ready to be shown, handleImageLoad turns the loaded switch on, nad wait 1 second.
  const handleImageLoad = () => {
    // When the image is loaded, we start a timeout of 1 second
    setTimeout(() => {
      // After 1 second, we set 'loaded' to true
      setLoaded(true);
    }, 1600); // Delay of 1.6 second
  };

  // Our component returns JSX to render
  return (
    <GameWrapper>
      {/* If the image has loaded, we do not display loading text, else display the loading text */}
      {loaded ? null : <LoadingText>Loading.. </LoadingText>}
      {/* Here, we are rendering the CoordsImageDisplay component with the current coordinates */}
      {/* If coordinates are not yet set, we pass a default value of '0,0' */}
      <CoordsImageDisplay
        coordinates={coordinates || '0,0'}
        onImageLoad={handleImageLoad} />
    </GameWrapper>
  );
};

// Finally, our Loader does two main things:

// If the loaded switch is off, it shows "Loading.." message. If it's on, it doesn't show anything.
// It calls upon the CoordsImageDisplay, that finds the right background image for the current room.
// CoordsImageDisplay also tells handleImageLoad when the image is loaded and ready to be shown.