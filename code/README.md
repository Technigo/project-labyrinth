# Project Labyrinth

This weeks assignment was to build a labyrinth text-based game. The goal for this week was to use the API from back-end specified to build a frontend that gives the user control over what to do next. The app should be built using React and Redux.

## The problem

We started with creating our components and reducer files. Then we created our slice in the reducer and made the fetches from the API using Redux thunk functions with dispatch and getState. Then by using the store and states we collected the data and presented it in different components. In our Game.jsx component we rendered the other main components (StartScreen and GameScreen).

Lastly we created a loader that was rendered conditionally in the Game.jsx component.

For the styling we used styled-components and NES CSS-framework. We also used Lottie for the loader-animation.

If we had more time we would like to do a styled end screen and a restart button.

## View it live

https://game-of-labyrinths.netlify.app/
