# Project Labyrinth 🗿

We built a text-based labyrinth game using React, Redux, API and thunks. 


## The problem

The main task was to build a text-based labyrinth game where the user writes their name and is afterwards presented with a description of where they are and provided with several alternatives about what they can do.

We started by sketching out the basic structure for the components that we would need, the flow of the components and their responsibilities. We also thought about what kind of data we would display in the application and the reducers we would need to set up in the Redux store that will go with the different components. With the sketch done and our decision on the flow of the components and what basic reducers we would need, we proceeded to set up the Redux store structure (the slice and reducers) and then the store in App.js. After that we proceeded to build all the components we would need for the basic structure, inter alia, a submain component (Content.js), start screen, game screen and game card. We chose to use buttons to display the different alternatives for direction to the user paired with a description for the alternative. For the API calls, we chose to wrap them using thunks. 

When we had the basic structure for the application in place, we added a loading message for the response delay and an error message in case the fetch from the API is unsuccessful. We also added functionality to store a history of what the user has done, which enabled our functionality for the back buttons. Furthermore, we added a local storage so that the data regarding user actions remain when reloading the page.

With the above functionality in place, we implemented the styling to the styled components and made the application responsive for mobile, tablet and desktop view.

If we had more time, we would
- have the setHistory action working as intended; right now an empty array is added as the first element in the history array instead of content from the second fetch,
- use of a design library for the loading state (for instance material.ui),
- add a background image to the GameScreen conditionally based on the description received from the API, and
- create some kind of visual representation of the labyrinth that the user can use when navigating.


## View it live

View our live project here: https://goofy-dijkstra-c1398c.netlify.app/ 
