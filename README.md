
# Labyrinth game 👾
This project is a  text-based Labyrinth Game adventure using React Redux and thunks. The game presents the user with a description of where they are and provide several alternatives about what they can do. Based on their choice, the state of the game is updated and then a new description and a set of options is displayed to the player. This project was built with pair-programming by: Sara Carlstein and Maria Bergman

## The Built and challanges 🧩
This project is built by POST requests with the backend, which is an API already built with the different endpoint, resulting in different text-based directions. This was our hardest challange, to understand the logic from the POST request, that we did not build our self. For this we used Postman so we could understand the data structure, the progress so we could build the flow in our components.

Here is some step-by-step directions👇

1) The page loads with a Welcome page, where the user can create player name, which then is sent to the Redux's global state and then the first POST request is performed. The player has to enter a unique name that no one else has created before (as this will be stores in backend) 

2) The user then gets the first set of instructions and the game starts. 

3) Upon the player's first action a new POST request is performed which provides the backend with the move that the player chose and generates a new instruction and moves that the player can perform.

This project was one of the hardest challange on the bootcamp so far, due to being new to redux, to its possiblities and also difficulties when building a quite complex set of logical steps. Postman was our saving us and the community on slack helping us when we got stuck. 

The styling was done entirely with styled components with a CSS library to enchanse this 80's effect 💅 

### Tech 
Redux
React
JavaScript
Styled Components
View it live 🔴
Labyrinth 🕹

### View it live: 
https://relaxed-thompson-7631bb.netlify.app/
