# Project Labyrinth

This is a pair-project done by Aschwin Sialia and Birgit Nehrwein. It's a textbased adventure and the player is navigating by interacting with an API from Technigo. Every time the player chooses a direction to move further by clicking a button, there is a POST-request send via the Redux store. So, to make this work, we were using thunks for the first time. 

## The problem

We started out by making a map of the gameflow and the architecture of our site. We then created a Redux store, that consists of two slices(game.js and ui.js). game.js holds the information about the gameplay and ui.js holds the loading state of the site. We created two thunks in game.js for fetching information from the API and use a LOTTIE-Animation here to wrap the fetch and show an animation to the user, while loading data. 

Project highlights:
- work with APIs together with Redux
- use thunks
- Reusable components
- structuring the redux store to suit data
- send JSON in the body of a request
- Styled Components
- LOTTIE animations

## View it live

Have a look at the project at https://labyrinth-aschwin-birgit.netlify.app/
