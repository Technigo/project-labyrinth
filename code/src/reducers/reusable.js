import { game } from './game';


export const startFetch = () => {
    console.log("hellog")
    return (dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'TechnigoPlayer',
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
 //               localStorage.setItem("game", JSON.stringify(json[0]));
                dispatch(game.actions.nextStep(data));
            })
            .catch((error) => console.error(error));

    }
    
}

