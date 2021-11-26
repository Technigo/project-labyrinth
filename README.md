# Project Labyrinth

Group project made by Karoline Mann and Christoffer Torninger. 
For this project we've built a game in which a user navigates through a labyrinth, in the form of a text-based adventure, provided by a backend.

## The problem

We started the project by sending a post request to fetch the data from the backend to generate the game. A communication between the back- and frontend was created. We continued with another post request to fetch more descriptions and game actions. We then presented the actions so that the user is in control over what to do next. Based on the action made by the user (Go East or Go South), the state of the game (where the user is) will update. Then, a new description and set of actions are being displayed.

The game has a responsive design and the styling was made with styled components. We added a loading component using an animation from Lottie.

If there would have been more time we would like to work more on the structure of the code - added all the styling in reusable components, for example. We would also have liked to add a history feature where you can track your steps.

Tech used: React, Redux, Styled Components

## View it live

https://labyrinth-for-lost-souls.netlify.app/
