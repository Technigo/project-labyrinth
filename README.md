# Project Labyrinth

The assignment was to create a text-based adventure where the player navigates a labyrinth. By fetching data from an API via POST requests, the player was presented with a list of possible actions. It was our job to build an interface for these using React components and Redux store. 

## The problem

Falling instantly in love with NES.css, we chose to use it as our design library for this project.

We decided to combine our three button components into one to embrace a more modular approach, assigning it onClick methods and classNames via props.

We rendered the game's map using a .map() array method to itterate through a store property called mapArray, consisting of nested arrays containing each grid square (room). The properties of these get updated alongside the rest of the game state. When rendering the rooms, a switch statement checks the .visited and .current properties of each room square object, and accordingly returns a div with the right className for appropriate styling. To render the "doors" between rooms in the map, further room object properties are used. When rendering the map, the visibility of door child objects (divs) are computed by checking against what exits are available in the room object.

If we had more time, we'd have written out the player's previous actions and rooms visited in a playlog of sorts, a long textarea which could be scrolled through. We'd also like to divide our Redux slice into several, to aid in readability.

## View it live

Netlify link:
the-labyrinth-emils-adventure.netlify.app
