import React, { useState } from "react";
import Labyrinth, { fetchLabyrinth } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";

export const StartPage = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const start = () => {
    dispatch(Labyrinth.actions.setUsername(username));
    dispatch(fetchLabyrinth());
  };


if(username.length > 2){ 
  return (
<div>

<input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
        <button onClick={start}>Welcome</button>
  
    </div>
)
    }
    else if (username.length < 3) {

      return (
        <div>
        
        <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
        
            </div>
        )

      
    }
    
  
};
