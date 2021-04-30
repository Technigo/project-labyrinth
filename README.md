# Labyrinth

**Mission:** 

*Create a text-based adventure game using backend in conjunction with Redux*

**Requirements:**
- 🔵 COMPLETE (all)
- 🔴 Partial
- ⚫ Partial


***

## Installation

Navigate to the project folder and run the following command

```
$ cd code 
$ npm install
```


This app has been generated using `create-react-app`.
> This app uses the following npm packages that are not included in the `create-react-app`:
> * [styledcomponents](https://styled-components.com/)
> * [uniqid](https://www.npmjs.com/package/uniqid)
> * [UI assets](http://ronenness.github.io/RPGUI/)

**To start the project**

```
$ cd code 
$ npm start
```
<br>

## ✅ Features ✅
***
*The following are the main features of this application:*
  
  * Website is responsive
  * User can start new game and set their chosen heroname and it is displayed on end screen.
    * They do not need to change the name on replay, since I generate a new id each time they play a session.
  * User can continue game if they reload page (saved in localstorage)
  * User can select a direction in the rooms and it displays that description on the Next tab
  * User can confirm action by clicking "Go there". This will move player to next room based on selected direction. 
  * While fetching new room data user can see a walking screen (i.e. loading)
  * When user has reached the end they will see an end screen displaying their heroname. 
  * User can from end screen start a new game.


<br>

## 💭 Reflections 💭
***
In general this project was difficult to get a grasp on design-wise in the beginning. However after a few searches I found an RPG UI css library that inspired the design of this application.

Once my design was done (see [here](https://www.figma.com/file/ILjDsiV6FZcu1NxsL1TZDe/The-Labyrinth?node-id=0%3A1)) I began builing up the store and components and evrything came into place. Once again I gleamed the **major** importance of pre-production. 

<br>

Issues that came up:
- I did struggle a bit with overcomplications. I often found myself solving an issue with lots of code, but then upon reflection I managed to actually get it down to in some cases just 4 lines of code. 
- I also struggled with getting a middleware package called redux-localstorage-simple to work in conjunction with thunks. It appears that when configuring a store with @toolkit the default imprted middlewares (such as thunk) are not imported. So I would have to manually import thunk. However instead of getting this to work with the localstaogre middleware, I opted to just implement a localstorage solution using my own custom made functions.  


If I were to continue on this project / start over I would:
- Nothing really (without getting an expanded backend to work with)

<br>

***

## View it live
[![Netlify Status](https://api.netlify.com/api/v1/badges/f5d1a054-ebc6-4fcd-9a46-fe14f9ebc284/deploy-status)](https://app.netlify.com/sites/inspiring-knuth-358aae/deploys)

https://inspiring-knuth-358aae.netlify.app/