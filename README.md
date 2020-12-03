# Project Labyrinth

This is a pair programming project made my Karin Nordkvist and Gabriella Bolin. The website is a Labyrinth Game which retrieves a list of actions from the backend and presents to the player. 

## The problem

We started the project by making two functions fetching the two API url's. 
Due to asynchronization these are made in thunks, where we show a loader until the fetch is done. In the end we put these the thunks into one function, where we instead pass props when calling the functions. 

Since it needs a new username to be passed to run the game again we added an input for adding username and making a new POST request. 

For the player we show the text and different direction alternatives to choose where to go next. Based on the desriptions we show different background pictures and based on the possible actions to take we show arrows. 


## Learning Objectives

- How to make API calls with Redux using thunks

- How to structure the Redux store to suit the data

- How to send JSON in the body of a request


## Tech

- REACT

- Redux

- Styled Components

## View it live

Link to see the project live: https://labyrinth-by-gabriella-karin.netlify.app/

