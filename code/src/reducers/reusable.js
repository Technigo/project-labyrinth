import { moves } from "./moves"

export const generateNewMove = () => {
    return (dispatch) => {
        fetch("https://wk16-backend.herokuapp.com/start")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(moves.actions.generateMove(data))
         })
    }
}