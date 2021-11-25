# Project Labyrinth

This project "Labyrinth" was made as a Week 14 pair-programming project for Technigo bootcamp by Julia Nikitina and Charlotte Nyman. 
You were supposed to build a project which allows a user to navigate a maze, in the form of a text-based adventure, provided by a backend.
The aim of this project was to dig deeper into redux, learn how to use thunks and work with API together with Redux.
We trained again how to send JSON in the body of a request and structure the redux store and made two slices: ui and game. 

## The problem

It went really good for us and we were done with the main React logic quite quick, we tried to focus on training to build thunks and use redux to build the communication with the backend and updating state. We had a challenge to start the game, so we first made the Main component that either renders the Page component or the Loading component. Depending on conditions the Page component will then render the start page, the question page or the summary page. It was nice to try Postman again and go through the game first there. We are very happy that we handled the response delay and displayed a compass that suited well for this game from Lottie library and the animation on start page that is blinking.
We also styled each room based on changing coordinates and displayed different background picture.
If we had more time, we would create a visual representation of labyrinth that the player is navigating.

## View it live

https://maze-labyrinth.netlify.app/ 
