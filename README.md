# Project Labyrinth

This project's goal is to build a text-based Maze Game adventure 💥: Using React Redux and thunks. The game presents the user with a description of where they are and provide several alternatives about what they can do next. Based on their choice, the state of the game is updated; then, a new description and set of actions can be displayed to the player 💪⚔
Pair-programming project built by: Destiny Lindgren and Vanessa Sue Smith ✌

## How we Built it - What we Learned

- This game is built by communicating with the **Backend**, so the first step was to understand the data we got back when doing our fetches: for this we used **Postman** to test out the game several times and understand what the flow of the game is supposed to be.
- We start the game by letting the player create a **Username** which we stored in **Redux's global store**. With this data, we can now perform our first **POST request** which provides us with the first set of instructions to give the player.
- Once the player chooses an action, a new **POST request** is triggered which provides the Backend with data on the direction in which the user wants to move and then generates a new set of instructions which we can show the user.
- The flow remains the same until the player reaches the end of the game. Each request to the Backend is performed via a **thunk** which performs the fetch + gathers the response data + passes that data to one of our **reducers** in our Redux store + and this reducer then saves that data into our global store, becoming our current game state.
- This project was a great opportunity to solidify React Redux concepts and put them into practice. Doing it in pairs, it became clearar what the flow of React Redux is, step by step and what connects with what 🧐
- We also had a lot of fun styling this project using **Styled Components**: especially since we challenged ourselves to try out some reusable components and also do some conditional styling with props: for example the Go Back button which will change color or be enabled depending on the state of the history component in our Redux global store 💅

## View it live

Try out out RETRO MAZE GAME! 🕹 Press Start here: https://unruffled-bhabha-8db7f5.netlify.app/
