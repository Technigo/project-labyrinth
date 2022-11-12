# Project Labyrinth

This app that retrieves a list of actions from the backend and presents them to the user as interactable items. For this app we fetch two APIs, by usig thunks to wrap the API calls.
The page is responsive.

## The problem

Fetching API and useing Thunk to wrap the API calls and dispatch Actions was complicated.

I was successed to fetch API/start but I couldn't fetch the API/action. My second problem was about loading. After loading game page was moving to the last step.

I solved the first problem by focusing to put my two arguments at function as same order as my function on the createSlice part.
And for the second problem, I used if statement for loading the API.
It took me a while to solve Errors.

## View it live
