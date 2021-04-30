# Project Labyrinth

This project is a pair-programmed assignment for the Technigo Boot Camp week 16, using Redux to build the communication with the backend together with an API.   

## The problem

The main task was to use a provided API to build a front end game, guiding the user through a maze in form of a text-based adventure. General requirements were to use Redux to store the current state of the game, handling the response delay and to make a good and responsive UX.  

We made use of preserving Redux store to localStorage, making all data remain when reloading the page. However we got a bit confused sometimes because of the localStorage. It appears that the application crashes if you update any functionality while the moves are stored in the localStorage, and we spent some time investigating this before realising that. 

Our visual theme originates from NES.css - a CSS framework generating 8bit-like aesthetics for text, buttons, input fields etc. From there we kept on applying a pixelated look for our app in general - using the iconic Neon Cat as our little avatar, floating in a square starred space with a primary color scheme touch and with an out-dated hourglass loading icon. We had some minor issues applying Flexbox to some of the NES generated features, but managed to work our way around it eventually.

When we have more time we would like to add a "Back" button so the user can move back in the labyrinth. We would also like for the several Game Screens to have separate colors based on the coordinates. Furthermore it would be a fun feature to have an interactive overview icon to show where in the labyrinth the player currently is positioned (based on the coordinates). And obviously our game would be further improved if we created our own backend API, to apply custom made instructions to the user (to go along better with our conceptual theme).

### Things we would like to have clearified
When starting the game the user has to provide a unique player name to the API. To make the user experience better, and prevent the user from having to test out multiple player names, we made a functionality in the store to set the name with a unique id provided by uniqid package. The user can simply just type any name and not have to worry about making it unique!

## View it live

Please follow this link to view the project live: 