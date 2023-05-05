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
  const [timerDone, setTimerDone] = useState(false);

  // Get the current game's coordinates from the Redux store
  const coordinates = useSelector((store) => store.labyrinthMango.coordinates);

  // useEffect is a hook that lets us perform side effects in function components.
  // Here, we are using it to set the 'loaded' state to 'false' every time the coordinates change.
  // This means that every time the user moves in the labyrinth, we reset the loading state
  useEffect(() => {
    setLoaded(false); // Reset the loaded state to 'false'
    setTimerDone(false); // Reset the timer state when coordinates change

    const timer = setTimeout(() => {
      setTimerDone(true); // Set the timer state to 'true' after 1.8 seconds
      if (timerDone && loaded) { // If img has loaded and timer has finished, set 'loaded' to true
        setLoaded(true);
      }
    }, 1800);

    // Clean up function: We clear the timeout when the component
    // unmounts or before the next time the effect runs
    // This prevents memory leaks and ensures that we
    // don't have multiple timers running at the same time
    return () => clearTimeout(timer);
  }, [coordinates, loaded, timerDone]);
  // Add 'loaded' and 'timerDone' to the dependencies array

  const handleImageLoad = () => {
    setLoaded(true); // Set 'loaded' to true when the image finishes loading
    if (timerDone && loaded) { // If image has loaded and timer has finished, set 'loaded' to true
      setLoaded(true);
    }
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
