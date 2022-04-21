import React from "react";
import { useSelector, useDispatch} from "react-redux";
import labyrinth, { generateQuestion } from "reducers/labyrinth";

const DirectionButton = () => {
    const directionAlternatives = useSelector((store) =>
        store.labyrinth.question.actions?.map((item) => item.direction)
    );
    const dispatch = useDispatch();

    const direction = {
        north: "North",
        west: "West",
        east: "East",
        south: "South",
    };

    const onClick = (direction) => {
        dispatch(generateQuestion(direction));
        dispatch(labyrinth.actions.setStep(direction));
    };

    return (
        <>
            <button 
            type="button"
            value={direction.north}
            onClick={(e) => onClick(e.target.value)}
            disabled={!directionAlternatives?.includes(direction.north)}
            >
            {direction.north}
            </button>

            <button 
            type="button"
            value={direction.west}
            onClick={(e) => onClick(e.target.value)}
            disabled={!directionAlternatives?.includes(direction.west)}
            >
            {direction.west}
            </button>

            <button 
            type="button"
            value={direction.east}
            onClick={(e) => onClick(e.target.value)}
            disabled={!directionAlternatives?.includes(direction.east)}
            >
            {direction.east}
            </button>

            <button 
            type="button"
            value={direction.south}
            onClick={(e) => onClick(e.target.value)}
            disabled={!directionAlternatives?.includes(direction.south)}
            >
            {direction.south}
            </button>

        </>
    )
}
export default DirectionButton