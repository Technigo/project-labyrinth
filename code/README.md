# Project Labyrinth

Through pair-programming (@elsico & @louise-becker) this @Technigo project was to build a project which allows a user to navigate a labyrinth, in the form of a text-based adventure, provided by a backend. We used a specified API to build a frontend that gives the user control over what to do next, using thunks and redux to build the communication with the backend.

## The problem

In this project we got to use Redux, APIs together with Redux, React.js, HTML, CSS, JSX and React components. We got to structure our redux store to suit the data and to send JSON in the body of a request.
We started the project by making sure we could understand the game, we did this by sending requests (with username) to the 2 specified API’s through Postman and analysing the fetches. Then we sketched a little around the logic of our reducer and the page components. We went on retrieving the correct payload and displaying it through a thunk so a loading spinner was added.
Then we went on with adding functionality like a restart button at the end of the game. For UI purposes we added a compass that moves each time a user has decided on a direction, so each new decision is taken with the compass arrow facing the previous choice of direction. Then we added minimalistic styling to our page (to enhance the mysticism), for mobile, pad and desktop.
If we had more time we would maybe experiment more with UI and information displayed to the user, f.ex. what direction choices the user has made historically.

## View it live

Please check out our page online here: https://elsa-louise-labyrinth.netlify.app/
