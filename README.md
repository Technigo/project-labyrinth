# Project Labyrinth :video_game: 

This week we were doing a pair-programming project and the assignment was to build a Labyrinth game in React Redux fetching the data from an API. 
The group contained of Anna Hellqvist and Agnes Harrysson Hansson. 

## Learning Objectives

How to structure the Redux store to suit the data

How to send JSON in the body of a request

How to make API calls with Redux using thunks

Pair-programming 

## Tech :computer: 

REACT

Redux

Styled Components

API

## The problem

We started to build our store and planning what components we were about to use and how to structure the project. 
In our project we decided to create the fetch outside the reducer in a separate js file where we also stored the thunk.   

In our APP.js we added localStorage which makes it possible for the user to revisit the site and start where they left. We also used conditional statements to render the content on the page, loaders to be shown when we are waiting for the fetch to finish. The conditional statements were also used to show the journey the user has taken, to show a restart game button on the last page, and also to remove the start-page (startControls.js) when the game is started. 

:art: To style the page we decided to use styled components and also to import createGlobalStyle to style the body. 

If we would have had more time we would have spent it on trying to implement a map which visually shows the journey the user has taken and also to style each room based on description :world_map:.

## View it live

https://project-labyrinth-game.netlify.app/ :star2: 

