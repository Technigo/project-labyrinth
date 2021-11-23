import React from "react";
import {
    EastBtn,
    WestBtn,
    NorthBtn,
    SouthBtn,
    DirectionBtns } from 'lib/styling'



const DirectionControls = () => {

    return (
        <DirectionBtns>
            <EastBtn>East</EastBtn>
            <WestBtn>West</WestBtn>
            <NorthBtn>North</NorthBtn>
            <SouthBtn>South</SouthBtn>
        </DirectionBtns>
    )
}

export default DirectionControls