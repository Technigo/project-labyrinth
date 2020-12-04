# Project Labyrinth
This is a pair programming project made by Karin Nordkvist and Gabriella Bolin. We have built a Labyrinth Game UI that retrieves a list of actions from the backend, and present them as selectable directions for the player. 

## The problem
We started by making two reducers, one for the labyrinth data and one for the ui. The labyrinth reducer keeps the actions for fetching data from the API and for setting the input value to current username. 

We created two functions fetching two different API url's. Due to asynchronization these functions are made as thunks, where we show a loader until the fetch is finished. Later on, we managed to combine these two thunks into one, where we instead pass props to set url, username, directions and type of action needed in the post request-body.

For each 'room' of the game, we generate buttons for possible new directions to go, a background image and of course show all the content text for the user to read. 
We have also worked a lot with conditional rendering to be able to show what we want based on different conditions. 

We have also added local storage to be able to store where you ended the game, but also impletented a restart button, to be able to restart the game at any time if wanted. The restart button does then not only reload the web browser, it also empties the username- and content object so the player can start over by selecting a new name.
--- 

We used styled components for styling and worked A LOT with passing props to set arrow directions, background images and other details that were specific for each direction/room. We based the props on current coordinates. 

We also worked on creating reuseable buttons and global styling components. We both feel this would be interesting to investigate more.


## Learning Objectives
- How to make asynchronous API calls with Redux using thunks
- How to structure the Redux store to suit the data
- How to send JSON in the body of a request


## Tech
- React
- Redux
- Styled Components

## View it live
Live demo: https://labyrinth-by-gabriella-karin.netlify.app/