# Project Labyrinth
A pair programming project by Anna Lindgren and Caroline Byström. A text-based adventure inspired by early command-line games.

The app has been generated using create-react-app. And uses the following npm packages that are not included in the create-react-app: 
- styled-components 
- react-redux 
- reduxjs/toolkit
- nes.css
- styled-loaders-react

The focus of this week was to learn:
- How to make API calls around Redux using thunks
- How to structure the redux store to suit the data
- To send JSON in the body of a request

## Reflections
We enjoyed the thematics of this week figuring out a proper design for the project whilst learning more about asynchronous Redux and keeping the history of previous data in Redux store. 

We started out by building the logic, then moved onto implementing saving data in Redux store and making a loading state to display a spinner. After we had all the data in place, being able to map it out we wanted to implement a end screen to show weather the game was finnished or not. 

When we where happy with the results we started with the styling. We decided to go with nes.css package and it was quite simple to style. Even though at sometimes we felt a little bit locked in with little room to change minor details of nes.css buttons etc.

We styled both with regular css file and with styled components for the elements that where not nes.css styling. 

The collaboration was mostly programming together, but we also tried out making separate branches after we had established a common ground to be able to work on different components at the same time. This saved us time to focus on additional features to add to our game. At the same time it was important to us that both of us was onboard and understood everything we where doing. We where both very good at having mini stand-ups when we worked on seperate branches. 

If we had more time it would be great to inform a first time player that their username of choice must be unique by recieving some kind of message from the backend. We would also persist redux store to localStorage, so the app data remains upon reloading the page. If more time it would also be interesting to dive in to nes.css package for styled components. It felt a little bit messy to combine regular css and styled components. 

## Play it here 😊

https://labyrinth-by-caroline-anna.netlify.app/
