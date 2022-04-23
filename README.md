# Project Labyrinth
This weeks project was to build a text-based labyrinth game in Redux by fetching data for the game through APIs.

## The problem
The app retrieves actions from the backend and presents them to the user as buttons to click on to navigate through the game.
We used thunks wrapping our API calls to handle the asynchronous delays in the fetch, and also added a loading page.  

The username of the player and the actions is stored in the backend, so if you go back to the game using the same username it should
catch up where you left off.

We used nes-CSS for styling to make it look more like a nostalgic terminal-based game.
For the styling we also used reusable styled components.
The page is responsive for mobile, tablet and desktop. 

Challenging this week was to display the loading page, since the boolean would only show as false and never true and
thus not displaying the page. We solved this with help from our team adjusting our ternary operator. 

If we had more time we could try making our loading of the next text shown to the user slower to make the loading page show better. 
We could also add a tracking of the players history. 
We also thought about using text-reveal as styling of the text presented to the player to enhance the terminal vibe of our app, making it look like the text is printed out by the terminal.  


## View it live
https://labyrinth-louisa-josefin.netlify.app/
