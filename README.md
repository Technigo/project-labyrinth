# Lost in maze

This is a simple, text-based adventure game where the user needs to navigate through a maze following hints. I built it together with Sandrine Elander (https://github.com/MindstormingAB) during the Technigo Bootcamp for frontend developers in fall 2020. 

## What it does

You start the game by choosing a username on the start page. As soon as you click "Start the game" you'll get the first description of a scenery. You also get a description of how it looks in a certain direction and the option to go there by clicking a button. 

The following steps look similar, but with several options: You'll have a description of a scene, descriptions of how it looks in certain directions and the options to choose two of them. You also have the option to just go back.

The game will count how many steps you need to get out of the maze. Even going back is counted as one step.

As soon as you get out of the maze, the game ends and you'll have the option to restart the game by clicking a "Play again"-button. It will reload the page and you'll need to pick a new username to start again. 

## The approach

The game is built using React and Redux. Most of the functionality is stored in a reducer file called "game". There you will find reducers to 

- enter a username
- enter the game
- take a step forward and
- take a step back.

The descriptions for the different steps are fetched from an API and the code for the fetches is stored in a thunk-file called "reusable". For the first step, the fetch will POST the chosen username to the API and get the first description back. In the following steps, the fetch POSTs the username, the type of action ("move") and the direction to get the next description back. 

The Redux store will keep the current step as well as a history of the previous steps that is used for the "go back"-button. It also keeps track of how many steps have been taken. 

The layout of the page was done using styled components and a grid. It contains of 
- a header
- some status info
- the description for the scenery
- buttons for the different directions
- the descriptions for the different directions
- the area for the "go back"-button and 
- a footer. 

In the center of the page you see a fox as a little avatar. The buttons to move forward will appear above, below or next to the fox depending on the direction, like on a compass. 

There's a specific start page where you only see an input field and the "Start the game"-button. On the last page, you don't have any direction buttons or descriptions as you can't move further. Because the API-requests take some time, there is a loader animation showing between the steps.

## Limitations

So far, the game has no local storage. The information about your progress will be stored in the API and as soon as you reload the page and reenter the game with the same username, you'll start at the same point where you left. But the information about the steps you have taken earlier won't be accessible, so you don't have the chance to go back. 
If there had been more time, we would have implemented a storage. We would also have liked to use animations for the avatar to make the user experience more fun. 

## Compatibility

The game is responsive and works on mobile, tablet and desktop view. As there is quite a lot of information in some of the steps, the design works best for tablet and desktop, though. We tested the page's responsiveness in dev tools in Chrome, Firefox and Edge. Everything works as expected. 

## Tech used

- HTML5
- CSS3
- JavaScript ES6
- React
- Redux
- styled components

## View it live

You can see the site up and running here: https://lostinmaze.netlify.app/
