# Project Labyrinth

The assignment was to fetch data from a pre-existing API and build a navigation game where the progress is based on the users choices. The game is started by sending the given username of the player by POST method as JSON and continued by sending and fetching more data to update the player's position. We also learned how to create Thunks to dispatch the fetches and to simulate a loading state to improve the user experience. 

This was a pair-programming excercise and we mostly worked mob-coding style.

## The challenge

We used Redux to write our own Slices and reducers. One of our initial challenges was understanding the labyrinth and mapping out the different states and properties from the API. Once we got the coordinates, main descriptions and direction-descriptions mapped out the "labyrinth" proved to be quite easy.

To improve the UX and to help create a better sense of movement we thought it would be important to display arrows pointing in the correct directions. We used flexbox commands and transform to create conditional styling to achieve this.

For the styling we used styled components. To create an authentic 8-bit pixel look we used a combination of borrowed image resources and self-made assets. We implemented a technique using css box-shadows to "draw" the pixelated frame for the dialog box and the dot indicating your maze position. The maze position and different room-images were conditionally rendered based on the API's coordinates.




## View it live

https://tiina-thea-pixelgame.netlify.app/