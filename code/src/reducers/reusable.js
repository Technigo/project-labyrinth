const username = "NewUser1337ClaudiaAxel"

//          >>>>> FÖRSTA REQUESTET <<<<<<
// https://wk16-backend.herokuapp.com/start
// {
//   "username": "NewUser1337ClaudiaAxel"
// }
// RESPONSEN ÄR:
// {
//   "coordinates": "0,0",
//   "description": "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
//   "actions": [
//       {
//           "type": "move",
//           "direction": "East",
//           "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
//       }
//   ]
// } 

// --------------------------------------------------

//          >>>>> ANDRA REQUESTET <<<<<<
// https://wk16-backend.herokuapp.com/action
// {
//   "username": "NewUser1337ClaudiaAxel", 
//   "type": "move", 
//   "direction": "North"
// }


// RESPONSEN ÄR: 
// {
//   "coordinates": "1,1",
//   "description": "The walls of the cavern seem to grow brighter and more colorful here. ",
//   "actions": [
//       {
//           "type": "move",
//           "direction": "South",
//           "description": "The bridge somehow looks sturdier now.  Seeing it feels you with confidence."
//       },
//       {
//           "type": "move",
//           "direction": "West",
//           "description": "A clear colorful pattern now marks the clearly cut stone pavers leading to the West"
//       }
//   ]
// }