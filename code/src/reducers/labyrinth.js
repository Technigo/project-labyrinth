import { createSlice } from "@reduxjs/toolkit";

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',

  }
})

/* fetch('https://labyrinth.technigo.io/start', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'TechnigoPlayer'
  })
}) */