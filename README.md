# Project Labyrinth

This weeks project was to build a text-based labyrinth game in React Redux using an API. The Labyrinth API provides a description of the users current location and then presents two direction options. Based on the users choice the game data state is updated and a new description and actions are displayed. Another theme this week was **thunks** and how these can be used to aid with asynchronous code.
This was a mob programming project between Andrea Osmar, Jamie Cook and Ylva Nilsson.

## The problem

We started by exploring the API and drawing a physical map to give us an understanding of the game experience and how we wanted to present it to the user.
We decided early on that we wanted to display a map with some kind of user icon that updated as the player moved throughout the game. But the first task was to create two fetch's using **thunks** which we used to dispatch our game data and save it in our **Redux global store**.

The game starts by prompting the user to enter a username before starting the game. This saves the username in our Store and triggers our first **POST** request with the help of useEffect, this also fetch's the first game description from the backend and the Labyrinth game begins. The second **POST** takes place once the user has made their first move.

Once we had the game working, we also decided to display the users previous move and location which we recorded in our store.
Next we created our map by using a CSS grid, and mapped over an array of coordinates which we created in our Store. Here we use some logic to style the square coordinates if that square has been visited.

## Tech

- React
- Redux
- Styled Components
- JSX
- JavaScript

## View it live

Have you got what it takes to complete: [The Labyrinth](https://thelabyrinth.netlify.app/)
