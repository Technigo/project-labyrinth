# Project Labyrinth 

This labyrinth app is created by me and Naushin Malik. 

The goal for this week is to build a project which uses the API specified, 
to build a frontend which gives the user control over what to do next, 
in the form of a text-based adventure, provided by a backend.

Based on the choice (Go East or Go South etc.), the state of the game (where the player is) will update. Then, a new description and set of actions can be displayed to the player.

This project's backend is designed so that there is some delay until the request returns from the server.  
Using thunks is a good way of making sure that the user doesn't do another action until the response is received from the server.

We planned our project in jamboard and followed it throughout the whole process of coding. 

## The challenge

How to make reusable components
How to set up Lotties with react, as a loader
Async actions
Using thunks and redux to build the communication with the backend

(If we had more time, we would have added useHistory and displayed the users steps and path through the maze)

## View it live

https://app.netlify.com/sites/labyrinth-by-naushin-and-jessicanordahl
