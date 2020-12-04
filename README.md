# Project Labyrinth

A responsive text-based labyrinth game fetching directions from API endpoints using react and redux.
A mix of styled components and Material UI was used to deign the app.

## Accessibility and cross-browser testing 

Html validated with W3C validation service (http://validator.w3.org/) with no errors found.
Chrome lighthouse report was generated with the result: 92% Accessibility, 100% Best Practices and 100% SEO. 
Testing has been done in different browsers such as Edge and Chrome in mobile, tablet and desktop views.


## Requirements achived: 

 **🔵 Blue Level (Minimum Requirements)**
- Your page should be responsive.
- Use redux to store the current state of the game
- Focus on making the UX of your app good. Handle the response delay
- Use thunks to wrap your API calls (but you don't have to if you don't want to).

**🔴 Red Level (Intermediary Goals)**
- Show the descriptions of the directions in the main description of the current room.  Present clear and simple actions.  For example, your button would say *"Go East"*.  Instead of *"East -A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"*
- Use redux to store a history of what the player has done
- If you want to focus more on design and make or use a design library (for example [material-ui](https://material-ui.com/))

**⚫ Black Level (Advanced Goals)**
Create a visual representation (drawing) of the map/labyrinth that the player is navigating.  It could update after each action.  The coordinates might be helpful here, or you can track the directions yourself

## Limitations

No limitations that I am aware of. 

## View it live

View the app live @ https://thelabyrinthgame.netlify.app/
