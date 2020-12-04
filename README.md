# Project Labyrinth Game 🕹

This project's goal was to build a text-based Labyrinth Game adventure using React Redux and thunks. 
The game presents the user with a description of where they are and provide several alternatives about what they can do. 
Based on their choice, the state of the game is updated and then a new description and a set of options is displayed to the player. 
This project was built with pair-programming by: Sofia Vaz Sousa & Jessica Panditha

## Planning & What I learned 🧩

This project is built by POST requests with the backend, so initially we needed to understand the data we were getting back and how we progressed in the game. For this we started to explore the data using Postman so we could understand the data structure, the progress so we could build the flow in our components. 

- The page loads with a Welcome page, where the user can create player name, which then is sent to the Redux's global state and then the first POST request is performed. The user then gets the first set of instructions and the game starts.
- Upon the player's first action a new POST request is performed which provides the backend with the move that the player chose and generates a new instruction and moves that the player can perform. 
- When the end of the game is reached, the player can restart it. 
- This project was an awesome challenge and a very good opportunity to pratice React Redux and understand how important is it's flow. 
- The styling was done entirely with styled components 💅 we have some reusable components, as well as, some state specific ones. For example, the background colour changes according to the current state coordinates. 

## Tech ⚡️
- Redux
- React
- JavaScript
- Styled Components

## View it live 🔴
[Labyrinth 🕹](https://labyrinth-sj.netlify.app/)
