# Project Labyrinth


React project made with Redux to practice using thunks and working with an API together with Redux.

We were provided with an labyrinth game API that once you sent a post request with a username to, you got a description and two options where to go next in response, and when you sent another post request with the direction you chose you got another response etc.

To execute the requests we used a thunk that took the end of the url as an argument, depending if it was to start the game or to go further. Except for the fetch it also took care of some other things like the loading indicator etc.

We used the nes.css library and styled components for the styling. There are a lot of things we would have done if we had more time, like a progress bar, maybe a back button, different styling for each “room” in the game etc.
