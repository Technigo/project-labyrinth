# Project Labyrinth

This is a text-based labyrinth game created in React and Redux. You can enter the creepy labyrinth (if you dare) and depending on which direction you move you end upp in different places.

## The problem

The game is a pair-programming project built by Johanna Mannestål and Lovisa Carling. We started by planning when we could work together because of our different working schedules, then set up the starter code to be able to use React and Redux. We created reducers and actions in order to display and store different data depending on which actions are dispatched. We also created thunks to make asyncronous actions when posting data to an API. By using a Lottie, a loading effect was added to handle the delay from the fetch until the request returns from the server, so that the waiting time is fine for the user.
We created component for the different game-pages, and used browserrouter to navigate between them. When the main functionalities were in place we added styling, mostly by using styledComponents, to make the labyrinth a bit more dramatic.

If we had more time we would create a map to store and display the different steps the user was taking throughout the labyrinth.

## View it live

https://creepy-maze.netlify.app/
