import { game } from './game';

export const gameStart = () => {
    return (dispatch) => {
        fetch("https://wk16-backend.herokuapp.com/start", {
            method: 'POST',
            body: JSON.stringify({
                username: TechnigoPlayer,
                type: "move",
                direction: direction
            }),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("game", JSON.stringify(data[0]));
                dispatch(game.actions.gameStart(data[0]));
            })
    }
}

