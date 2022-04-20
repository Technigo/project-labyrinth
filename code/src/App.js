import React from "react";

fetch(`https://labyrinth-technigo.herokuapp.com/start`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "technigoplayar" }),
})
  .then((res) => res.json())
  .then((res) => console.log(res));

export const App = () => {
  return <div>Find me in src/app.js!</div>;
};
