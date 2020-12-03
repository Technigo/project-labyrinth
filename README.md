# Project Labyrinth

This is a pair programming project made my Karin Nordkvist and Gabriella Bolin. The website is a Labyrinth Game which retrieves a list of actions from the backend and presents to the player. 

## The problem

We started the project by making two reducers, one for the labyrinth data and one for the loader. The labyrinth reducer keep the actions for fetching the labyrinth data from the API and for setting the username as input. We created two functions fetching two different API url's. Due to asynchronization these functions are made as thunks, where we show a loader until the fetch is done. Later on, we did put these thunks into one function, where we instead pass props with different url when calling the functions. 

It needs a new username to be passed to run the game again, therefore we added an input element for adding username and making a new POST request. 

For the player we show the text and different direction alternatives to choose where to go next. Based on the desriptions we show different background pictures and based on the possible actions to take we show arrows. 

Some of the buttons we were able to reuse. The direction buttons were made differently since they includes emojis. 
- utveckla?

We have also worked a lot with conditional rendering to be able to show what we want based on different conditions. 

We used styled components for styling and worked a lot with passing props. That made us with the coordinates and actions found in the API make differnt styling with help of ternary operators. 

We have also added local storage to be able to store where you ended, but did create a Restart button so it is always possible to restart the game. The restart button does then not only reloading the web browser, it does also empty the username and content object. 

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

