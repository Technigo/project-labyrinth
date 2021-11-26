# Labyrinth - text based adventure game

The goal of this project was to make the user navigate a maze, in the form of a text-based adventure, provided by a backend.
It was a pair project built by Emelie Lindblom & Ida Aspen

## Features

- API POST requests
- Sending JSON in the body of a request
- Redux hooks: useSelector, useDispatch
- Used APIs together with Redux
- Make redux behave in an asynchronus way using thunks.
- Responsive UI for mobile, tablet and desktop

## Production process

We started with planning the project on a Kanban board using Trello. The design sketch was made in figma.
Then we planned for the frame and structure of the app and started with setting up the reducers and building the API fetches.
The Back-button and the Lottie animation were our gratest challenges in this project.
The Lottie animation and its styling were a bit hard to apply at first and had issues with the order of the rendering.

The Back-button were not rendering as it supposed to at first as we dispatched the history array in the thunk together with the currentPosition array.

## View it live

https://ida-emelie-project-labyrinth.netlify.app/
