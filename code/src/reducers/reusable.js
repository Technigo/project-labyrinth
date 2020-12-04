import { moves } from "./moves";
import { ui } from "./ui";

const startURL = "https://wk16-backend.herokuapp.com/start";

//Doing post request to start endpoint including the username the user has inputted and that is stored in the redux store. Returned os a response of coordinates, description and the actions array which is a child of the moves object. Inside the array is an initial object with properties move, direction and description.
export const initiateStart = (universalUsername) => {
    return (dispatch) => {
        dispatch(ui.actions.gameIsLoading(true))
        fetch(startURL, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({ username: universalUsername })
            })
            .then(res => res.json())
            .then(data => {
                dispatch(moves.actions.generateMove(data))
                dispatch(ui.actions.gameIsLoading(false))
            });
    };
};

const actionURL = "https://wk16-backend.herokuapp.com/action";

//Second post request which is actioned when the user clicks on the direction button that is returned each time a user chooses a specific direction. We have to pass the username, type and direction so we can get back the next moves from the api.
export const initiateAction = (direction, universalUsername) => {
    return (dispatch) => {
        dispatch(ui.actions.gameIsLoading(true))
        fetch(actionURL, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({ 
                username: universalUsername,
                type: "move",
                direction: direction
            })
        })
        .then(res => res.json())
        .then(data => {
            dispatch(moves.actions.generateMove(data))
            dispatch(ui.actions.gameIsLoading(false))
        })
    };
};