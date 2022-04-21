fetch(`https://labyrinth-technigo.herokuapp.com/start`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "technigoplayar" }),
})
  .then((res) => res.json())
  .then((res) => console.log(res));
