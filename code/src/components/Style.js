import styled from "styled-components/macro"

export const Container = styled.div`
    width: 50vw;
    height: 60vh;
    margin: 0 auto;
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid white;
    // border-radius: 40px;
    // box-shadow: 0px 5px 10px 0px rgb(16, 141, 224, 0.7), inset 0px 5px 10px 0px rgb(16, 141, 224, 0.7); 
    
`

export const NameInput = styled.input`
    font-family: 'Press Start 2P', cursive;
    padding: 20px;
    margin-bottom: 10px;
`

export const StartButton = styled.button`
    font-family: 'Press Start 2P', cursive; 
    padding: 20px;
`
export const StartGame = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`


export const MainGameStyle = styled.section`
    display: flex;
    flex-direction: column;
`

export const InfoSection = styled.section`
    font-size: 18px;
`


export const DirectionSection = styled.section`
    margin-top: 50px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WinSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 200px;
`

export const DirectionButton = styled.div`
    width: 200px;
    margin: 20px;
`