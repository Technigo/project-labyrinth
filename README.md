# Project Labyrinth 🗿

This week's project was a pair-programming project made by Sara Stjernberg, Petra Almgren and Emmma Urman. The task was to build a web app in the form of a Labyrinth game. In the project we use an API created by our teachers at Technigo, which retrieves a list of actions and descriptions from the backend and presents them to the user as interactable items (like in old school text-based adventure games). The users is presented with a description of where they are, and options with possible directions to continue forward in the labyrinth. 

## The problem / how we solved it 💡
- We started out with doing a POST request with our urls in Postman, to better see and understand the data we're supposed to work with in this project. After that we continued with creating our first components and setting up our store and reducers for the project. The initialstate and reducers for our global store is retrieved from the gameState file.

- The game starts with letting the user create a user name. The user name is then passed to the api via a POST request in the gameFetch reducer, which gives us the first step of the game. 

- The continued steps are triggered by a new POST request to the backend, in which we send the username and direction that the user has choosen. This makes it possible for us to show a new set of descriptions and possible directions for the user. 

- The background picture changes in each step with the help of conditional styling using props, and we've also implemented a loader in form of a compass to handle the loading state. 

- The images are created by VityaR83 on Deviant Art 🎨. 

- The project is styled mainly using styled components 💅

## Tech ⚡
- React
- Redux
- API:s
- JSX
- Styled components
- Lottie animations

## View it live 👩‍💻

Link to the deployed project on Netlify: 
