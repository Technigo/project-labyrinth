# Project Labyrinth by Pauline & Ann-Sofi

A project done with pair programming by using React and Redux. The task was to build a textbased labyrith game by fetching data from an API.

## The project

In this game you start by entering your username and find yourself in a text-based envirorment. From a description of where in this labyrinth you are located you can choose where to go next by clicking on buttons with cardinal directions. The goal is to get out of the labyrinth within as few moves as possible. In the end-screen you get you result displayed.

This game also changes symbols depending on which part of the labyrinth you're located in.

We used a nostalgic css framework reminding of the old 80's computer-/videogames from https://nostalgic-css.github.io/NES.css/.

## The process

We used redux store, reducers and thunks to post user-chosen data to an API and displaying the fetch result.
The project went smoothly. Our only real problem we noticed during deploy when styled-components and aria-label didn't work as intended. We worked around this by replacing styled-component spans with normal JSX spans.


## Tech & tools used
*React
*Redux
*API
*Live share
*Postman
*Styled components
*Thunks

## View it live

https://labyrinth-game-2021.netlify.app/
