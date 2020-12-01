import { moves } from "./moves";

const startURL = "https://wk16-backend.herokuapp.com/start";
const username = "Technigo";

//Doing post request to api do we can get the response of coordinates, description and the array actions which is a child of the moves object. Inside the array is an initial object with properties move, direction and description.

export const initiateStart = () => {
    return (dispatch) => {
        fetch(startURL, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({ username: username })
            })
            .then(res => res.json())
            .then(data => dispatch(moves.actions.generateMove(data))
        );
    };
};