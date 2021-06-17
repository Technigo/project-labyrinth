Project week 16 of Technigo bootcamp

# Project Labyrinth

The project was to build a text-based labyrinth game using React, Redux and API's.
Based on the alternatives you're given you choose your next step in the game.

## The problem

For this project we decided to go retro!
We started by checking the API in Postman and setting up the slice maze with the initialStates username, description and moves as well as matching reducers.

To start the game we send in a username in the body of the fetch and dispatch what we want to update in our store.
The first fetch we do on the StartScreen when the player submits the username, also using React Router to get to the GameScreen where we assemble our game. When the game is loading we display a LoadingScreen.

The game lets you choose which way you want to go and by clicking the button we make a second fetch to update our store.
We decided to use more states and reducers when we got the basic functions working, and we also made smaller components when the content grew on the GameScreen.

Finally we added a GameOverScreen and a WinnerScreen that renders if you either come back to your starting point (loose) or get to the final coordinates (wins). We do this by checking the coordinates state that we get from the API.

The project is responsive and for styling we used styled components.
Built during pair-programming in VS Code.

If we had more time it's possible to make more reusable components.

Tools and techniques:
React,
Redux,
React Router,
Styled Components

API,
Postman,
Pair-programming

## View it live

https://adventure-labyrinth.netlify.app/
