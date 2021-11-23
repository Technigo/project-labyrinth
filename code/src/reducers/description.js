export const fetchContinue = (username, type, direction) => {
    return (dispatch) => {
        // dispatch borde vara här
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: 'Owl' })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(labyrinth.actions.setDescription(json));
            dispatch(labyrinth.actions.setDesciptionHistory({ direction }));
        })
    
    };
};